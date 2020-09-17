<?php

namespace Fusion\Models;

use Fusion\Concerns\HasBlueprint;
use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Setting extends Model
{
    use HasBlueprint;

    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'description',
        'group',
        'icon',
        'status',
    ];

    protected $blueprintGroup  = 'Settings';
    protected $blueprintHidden = true;

    public function getBlueprintGroup(): string
    {
        return 'Settings';
    }

    public function getBlueprintVisibility(): bool
    {
        return false;
    }

    /**
     * @return \Fusion\Database\Eloquent\Model
     */
    public function getBuilder()
    {
        $builder = new \Fusion\Services\Builders\Setting($this->handle);

        return $builder->make();
    }

    /**
     * Get the "table" attribute value.
     *
     * @return string
     */
    public function getTableAttribute()
    {
        return "{$this->table}_{$this->handle}";
    }

    /**
     * Group have one group of settings.
     *
     * @return HasOneRelationship
     */
    public function settings()
    {
        $name = Str::studly($this->handle);
        $path = fusion_path("/src/Models/Settings/{$name}.php");

        if (!file_exists($path)) {
            $this->getBuilder()->firstOrCreate(['id' => 1, 'setting_id' => $this->id]);
        }

        return $this->hasOne("Fusion\Models\Settings\\{$name}");
    }
}
