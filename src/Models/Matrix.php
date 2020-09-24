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
        'revision_control' => 'boolean',
        'categorizable'    => 'boolean',
        'creditable'       => 'boolean',
        'publishable'      => 'boolean',
        'seoable'          => 'boolean',
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

    public function getBuilder()
    {
        $builder = 'Fusion\\Services\\Builders\\'.Str::studly($this->type);
        $builder = new $builder($this->handle);

        return $builder->make();
    }

    public function getAdminPathAttribute()
    {
        if ($this->type === 'single') {
            return '/single/'.$this->slug;
        } else {
            return '/collection/'.$this->slug;
        }
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return 'mx_'.$this->handle;
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
}
