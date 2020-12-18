<?php

namespace Fusion\Models;

use Fusion\Concerns\HasBlueprint;
use Fusion\Concerns\HasBuilder;
use Fusion\Contracts\Structure;
use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Setting extends Model implements Structure
{
    use HasBlueprint;
    use HasBuilder;

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

    protected $structure = 'Settings';

    protected $blueprintHidden = true;

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
