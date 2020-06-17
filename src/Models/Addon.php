<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Fusion\Facades\Addon as AddonFacade;
use Fusion\Concerns\HasLocalEloquentData;

class Addon extends Model
{
    use HasLocalEloquentData;

    public function getRows()
    {
        return AddonFacade::values()->toArray();
    }
}