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
     * Return builder stub filename.
     * 
     * @return string
     */
    protected function getStubFile()
    {
        return Str::lower($this->source->type) . '.stub';
    }

    /**
     * Return folder to generate builder.
     * 
     * @return string
     */
    protected function getBuildFolder()
    {
        return Str::of($this->source->type)->plural()->ucfirst()->__toString();
    }

    /**
     * Add addl placeholders to merge into
     * your builder stub file.
     * 
     * @return array
     */
    protected function getPlaceholders()
    {
        return [
            '{order_by}'        => $this->source->order_by ?? 'name',
            '{order_direction}' => $this->source->order_direction ? 'ASC' : 'DESC',
        ];
    }
}
