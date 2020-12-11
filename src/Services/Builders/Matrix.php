<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Matrix as MatrixModel;
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
        $this->source = MatrixModel::where('handle', $handle)->firstOrFail();
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
}
