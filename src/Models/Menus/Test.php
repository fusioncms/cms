<?php

namespace Fusion\Models\Menus;

use Fusion\Models\Menu;
use Fusion\Models\Field;
use Fusion\Concerns\HasOrder;
use Illuminate\Support\Str;
use Fusion\Concerns\HasActivity;
use Fusion\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Spatie\Activitylog\Models\Activity;

class Test extends Model
{
    use HasOrder, HasActivity;

	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'menu_test';

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = ['integer', 'boolean', 'boolean'];

    /**
     * Mass assignment protection.
     *
     * @var array
     */
    protected $fillable = ['menu_id', 'name', 'url', 'new_window', 'order', 'status'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];


    protected $with = ['children'];

    /**
     * Get the Menu relationship.
     *
     * @return mixed
     */
    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    /**
     * Get all of the fields for the menu.
     *
     * @return mixed
     */
    public function getFieldsAttribute()
    {
        return $this->menu->fieldset->fields;
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    

    /**
     * Tap into activity before persisting to database.
     *
     * @param  \Spatie\Activitylog\Models\Activity $activity
     * @param  string   $eventName
     * @return void
     */
    public function tapActivity(Activity $activity, string $eventName)
    {
        $node       = $activity->subject;
        $menu       = $node->menu;
        $action     = ucfirst($eventName);
        $modelName  = strtolower(Str::singular($menu->name));
        $properties = [
            'link' => "menus/{$menu->id}/nodes/{$node->id}/edit",
            'icon' => 'anchor'
        ];

        $activity->description = "{$action} {$modelName} menu node ({$node->name})";
        $activity->properties  = $properties;
    }
}