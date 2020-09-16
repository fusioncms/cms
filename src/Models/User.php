<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasDynamicRelationships;
use Fusion\Concerns\HasRoles;
use Fusion\Concerns\MustVerifyEmail as UserMustVerifyEmail;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\Models\Activity;
use Spatie\Activitylog\Traits\CausesActivity;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasRoles;
    use UserMustVerifyEmail;
    use HasApiTokens;
    use Notifiable;
    use HasDynamicRelationships;
    use HasActivity;
    use CausesActivity;
    use CanResetPassword;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'status',
        'logged_in_at',
        'invalidly_logged_in_at',
        'password_changed_at',
        'email_verified_at',
        'invalid_logins',
        'fields',
        'settings',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'fields'   => 'collection',
        'settings' => 'collection',
    ];

    protected $appends = [
        'role',
        'verified',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'logged_in_at',
        'invalidly_logged_in_at',
        'password_changed_at',
    ];

    /**
     * Presenter instance.
     *
     * @var string
     */
    protected $presenter = 'Fusion\Presenters\UserPresenter';

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The description to be recorded to the activity log.
     *
     * @var array
     */
    protected $activityDescription = '{{ ucfirst($activity->event) }} the user <b>{{ $subject->name }}</b>.';

    /**
     * @var bool
     */
    protected $searchable = false;

    /**
     * Returns the age of the account.
     *
     * @return string
     */
    public function getAccountAgeAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    /**
     * Returns the URL to the user's Gravatar.
     *
     * @param int $size
     *
     * @return string
     */
    public function gravatar($size = 30)
    {
        $email = md5($this->email);

        return "//www.gravatar.com/avatar/{$email}?s={$size}";
    }
    
    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function getVerifiedAttribute()
    {
        return $this->hasVerifiedEmail();
    }

    /**
     * Scope to query resource.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearchQuery(Builder $query, $value)
    {
        return $query
            ->where('name', 'like', "%{$value}%")
            ->orWhere('email', 'like', "%{$value}%");
    }

    /**
     * Tap into activity before persisting to database.
     *
     * @param \Spatie\Activitylog\Models\Activity $activity
     * @param string                              $eventName
     *
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $subject    = $activity->subject;
        $action     = ucfirst($eventName);
        $properties = [
            'link' => "users/{$subject->id}/edit",
            'icon' => 'users',
        ];

        $activity->description = "{$action} user account ({$subject->name})";
        $activity->properties  = $properties;
    }

    /**
     * On successful login, log the activity and set the current date.
     *
     * @return void
     */
    public function logSuccessfulLogin()
    {
        activity('sign-ins')
            ->withProperties(['icon' => 'sign-in-alt'])
            ->log('Signed in');

        static::withoutEvents(function() {
            $this->logged_in_at = now();
            $this->save();
        });
    }

    /**
     * On a failed login attempt, log the date and increase the number
     * of times this has consecutively happened.
     *
     * @return void
     */
    public function logFailedLogin()
    {
        static::withoutEvents(function() {
            $this->increment('invalid_logins');
            $this->invalidly_logged_in_at = now();
            $this->save();
        });
    }

    /**
     * On password change, log the current date.
     *
     * @return void
     */
    public function logPasswordChange()
    {
        static::withoutEvents(function() {
            $this->password_changed_at = now();
            $this->save();
        });
    }

    /**
     * On successful login, clear the last invalid login stats.
     *
     * @return void
     */
    public function clearFailedLoginAttempts()
    {
        static::withoutEvents(function() {
            $this->invalid_logins = 0;
            $this->invalidly_logged_in_at = null;
            $this->save();
        });
    }
}
