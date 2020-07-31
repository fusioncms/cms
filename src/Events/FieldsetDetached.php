<?php

namespace Fusion\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class FieldsetDetached
{
    use Dispatchable;
    use SerializesModels;

    /**
     * @var \Fusion\Concerns\HasFieldset
     */
    public $model;

    /**
     * @var \Fusion\Models\Fieldset
     */
    public $fieldset;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($model)
    {
        $this->model = $model->getBuilder();
        $this->fieldset = $model->fieldset;
    }
}
