<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

abstract class Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $method = Str::ucfirst($this->getMethod());

        if (method_exists($this, "authorize{$method}")) {
            return $this->{"authorize{$method}"}();
        }
    }
}