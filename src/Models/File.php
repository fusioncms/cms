<?php

namespace Fusion\Models;

use File as FileSystem;
use Storage;
use Illuminate\Support\Str;
use Fusion\Concerns\CachesQueries;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class File extends Model
{
    use CachesQueries;

    protected $fillable = [
        'uuid',
        'directory_id',
        'name',
        'title',
        'alt',
        'caption',
        'location',
        'extension',
        'mimetype',
        'bytes',
        'width',
        'height',
    ];

    protected $appends = [
        'isFile',
        'type',
        'url'
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($model) {
            Storage::delete($model->location);
        });
    }

    /**
     * Get derived absolute file path.
     *
     * @return string
     */
    public function getFullPathAttribute()
    {
        return Storage::disk('public')->path($this->location);
    }

    /**
     * Is file a file (or directory)?
     *
     * @return boolean
     */
    public function getIsFileAttribute()
    {
        return FileSystem::isFile($this->fullPath);
    }

    /**
     * Get derived file type (image or ..?).
     *
     * @return string
     */
    public function getTypeAttribute()
    {
        $type  = strtok($this->mimetype, '/');
        $types = ['image', 'audio', 'video'];

        return in_array($type, $types) ? $type : 'document';
    }

    /**
     * Get the user-friendly url.
     *
     * @param  string  $value
     * @return string
     */
    public function getUrlAttribute()
    {
        return "/file/{$this->uuid}/{$this->name}";
    }

    /**
     * A file belongs to a directory.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function directory()
    {
        return $this->belongsTo(Directory::class);
    }

    /**
     * Scope to query search filter.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeSearchQuery(Builder $query, $value)
    {
        return $query
            ->where('name', 'like', "%{$value}%")
            ->orwhere('title', 'like', "%{$value}%")
            ->orWhere('alt', 'like', "%{$value}%")
            ->orWhere('caption', 'like', "%{$value}%");
    }

    /**
     * Scope to query display type.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeDisplayQuery(Builder $query, $value)
    {
        switch ($value) {
            case 'documents':
                $displays = ['text', 'application'];
                break;
            default:
                $displays = [ Str::singular($value) ];
                break;
        }

        foreach ($displays as $display) {
            $query->where('mimetype', 'like', "{$display}%");
        }

        return $query;
    }
}
