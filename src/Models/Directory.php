<?php

namespace Fusion\Models;

use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Activitylog\Models\Activity;

class Directory extends Model
{
    use HasActivity;
    use HasFactory;

    /**
     * Fillable fields for Directory model.
     *
     * @var
     */
    protected $fillable = [
        'disk_id',
        'parent_id',
        'name',
        'slug',
    ];

    /**
     * @var bool
     */
    protected $searchable = false;

    protected $with = ['parent'];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            foreach ($model->files as $file) {
                $file->delete();
            }

            foreach ($model->children as $child) {
                $child->delete();
            }
        });
    }

    /**
     * A file belongs to a disk.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function disk()
    {
        return $this->belongsTo(Disk::class);
    }

    /**
     * A directory has many files.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function files()
    {
        return $this->hasMany(File::class);
    }

    /**
     * Relationship to parent Directory.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function parent()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    /**
     * Relationship to child Directories.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * Scope a query to only include users of a given type.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param mixed                                 $type
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeHierarchy($query, $parentId = 0)
    {
        return $query
            ->withCount('files')
            ->where('parent_id', $parentId)
            ->with('children.children');
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
        $subject = $activity->subject;
        $action  = ucfirst($eventName);

        $activity->description = "{$action} folder ({$subject->name})";
        $activity->properties  = ['icon' => 'folder'];
    }
}
