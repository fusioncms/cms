<?php

use Fusion\Contracts\Factory;
use Fusion\Models\Import;

class ImportFactory implements Factory
{
    /**
     * Factory state(s) used when creating records.
     *
     * @var array
     */
    protected $states = [];

    /**
     * Number of records to generate.
     *
     * @var int
     */
    protected $times = 1;

    /**
     * Create.
     *
     * @return [type] [description]
     */
    public function create()
    {
        if (count($this->states) > 0) {
            $imports = factory(Import::class, $this->times)
                ->states(implode(',', $this->states))
                ->create();
        } else {
            $imports = factory(Import::class, $this->times)->create();
        }

        if ($this->times === 1) {
            return $imports->first();
        }

        return $imports;
    }

    public function withStates(array $states)
    {
        $this->states = $states;

        return $this;
    }

    /**
     * Create N number of instances.
     *
     * @param int $times
     *
     * @return \SectionFactory
     */
    public function times($times)
    {
        $this->times = $times;

        return $this;
    }
}
