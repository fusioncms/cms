<?php

namespace Fusion\Contracts;

use Illuminate\Database\Eloquent\Model;

interface BuilderObserver
{
    public function created(Model $model);
    
    public function updating(Model $model);

    public function deleted(Model $model);
}
