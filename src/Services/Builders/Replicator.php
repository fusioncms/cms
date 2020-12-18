<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Replicator as Model;
use Fusion\Models\Section;
use Illuminate\Support\Str;

class Replicator extends Builder
{
    /**
     * Owning Section.
     *
     * @var \Fusion\Models\Section
     */
    protected $section;

    /**
     * Generated handle.
     *
     * @var string
     */
    protected $handle;

    /**
     * New Builder instance.
     *
     * @param string                 $uniqid
     * @param \Fusion\Models\Section $section
     */
    public function __construct($uniqid, Section $section)
    {
        $this->source  = Model::where('uniqid', $uniqid)->firstOrFail();
        $this->section = $section;
        $this->handle  = "{$this->source->handle}_{$this->section->handle}_{$uniqid}";
    }

    /**
     * Mass assignment protection.
     *
     * @var array
     */
    protected function getFillable()
    {
        return ['replicator_id', 'section_id'];
    }

    /**
     * Return builder class name.
     *
     * @return string
     */
    protected function getBuildName()
    {
        return Str::studly($this->handle);
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
            '{tableName}' => str_handle("rp_{$this->handle}"),
        ];
    }

    /**
     * Builder table prefix.
     *
     * @var string
     */
    public static function prefix()
    {
        return 'replicator';
    }
}
