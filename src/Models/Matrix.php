<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Concerns\HasBlueprint;
use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Spatie\Activitylog\Models\Activity;

class Matrix extends Model
{
    use HasBlueprint;
    use HasActivity;

    protected $with = ['blueprint'];

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id',
        'name',
        'handle',
        'slug',
        'description',
        'type',
        'reference_singular',
        'reference_plural',
        'sidebar',
        'quicklink',
        'icon',
        'show_name_field',
        'name_label',
        'name_format',
        'route',
        'template',
        'status',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'sidebar'          => 'boolean',
        'quicklink'        => 'boolean',
        'status'           => 'boolean',
        'show_name_field'  => 'boolean',
    ];

    /**
     * What the generated blueprint should be grouped by.
     *
     * @return string
     */
    public function getBlueprintGroup(): string
    {
        return Str::plural(ucfirst($this->type));
    }

    /**
     * Get the builder instance.
     *
     * @return Model
     */
    public function getBuilder()
    {
        $builder = 'Fusion\\Services\\Builders\\'.Str::studly($this->type);
        $builder = new $builder($this->handle);

        return $builder->make();
    }

    /**
     * Get the builder's table name.
     *
     * @return string
     */
    public function builderName()
    {
        return "mx_{$this->handle}";
    }

    public function getAdminPathAttribute()
    {
        if ($this->type === 'single') {
            return '/single/'.$this->slug;
        } else {
            return '/collection/'.$this->slug;
        }
    }

    public function parent()
    {
        return $this->hasOne(Matrix::class, 'id', 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Matrix::class, 'parent_id', 'id');
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
        $matrix     = $activity->subject;
        $action     = Str::ucfirst($eventName);
        $properties = [
            'icon' => 'hashtag',
            'link' => "matrices/{$matrix->id}/edit",
        ];

        $activity->description = "{$action} matrix ({$matrix->name})";
        $activity->properties  = $properties;
    }

    /**
     * Scope a query to only include top-level sidebar items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSidebar($query)
    {
        return $query
            ->where('sidebar', true)
            ->where('parent_id', 0)
            ->orderBy('name');
    }
}
