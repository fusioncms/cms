<?php

namespace Acme\Myaddon\Events;

use Acme\Myaddon\Models\Acme;
use Illuminate\Foundation\Events\Dispatchable;

class AcmeEvent
{
    use Dispatchable;

    /**
     * @var \Acme\Myaddon\Models\Acme
     */
    public $acme;
    
    /**
     * Create new instance.
     *
     * @param \Acme\Myaddon\Models\Acme $acme
     */
    public function __construct(Acme $acme)
    {
        $this->acme = $acme;
    }
}
