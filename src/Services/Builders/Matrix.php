<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Matrix as Model;
use Illuminate\Support\Str;

class Matrix extends Builder
{
    /**
     * New builder instance.
     *
     * @param $handle string
     */
    public function __construct($handle)
    {
        $this->source = Model::where('handle', $handle)->firstOrFail();
    }

    /**
     * Mass assignment protection.
     *
     * @var array
     */
    protected function getFillable()
    {
        switch ($this->source->type) {
            case 'single':
                return ['matrix_id', 'name', 'slug', 'publish_at', 'expire_at', 'order', 'status'];
                break;
            case 'collection':
                return ['matrix_id', 'parent_id', 'name', 'slug', 'publish_at', 'expire_at', 'order', 'status'];
                break;
        }

        return [];
    }

    /**
     * Attribute casting.
     *
     * @var array
     */
    protected function getCasts()
    {
        return [
            'order' => 'integer',
            'status' => 'boolean',
        ];
    }

    /**
     * Return builder stub file path.
     * [override].
     *
     * @return string
     */
    protected function getStubPath()
    {
        $name = Str::lower($this->source->type);
        $path = fusion_path("/stubs/builders/{$name}.stub");

        return $path;
    }

    /**
     * Return folder to generate builder.
     * [override].
     *
     * @return string
     */
    protected function getBuildFolder()
    {
        return Str::of($this->source->type)
            ->plural()
            ->ucfirst()
            ->__toString();
    }

    /**
     * Add addl. placeholders to merge into your builder stub file.
     * [override].
     *
     * @return array
     */
    protected function getPlaceholders()
    {
        return [
            '{order_by}'        => $this->source->order_by ?? 'order',
            '{order_direction}' => $this->source->order_direction ? 'ASC' : 'DESC',
        ];
    }

    /**
     * Builder table prefix.
     *
     * @var string
     */
    public static function prefix()
    {
        return 'mx';
    }
}
