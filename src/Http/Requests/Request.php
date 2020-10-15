<?php

namespace Fusion\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

abstract class Request extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        switch ($this->getMethod()) {
            case 'post':
            case 'POST':
                if (method_exists($this, 'authorizePost')) {
                    return $this->authorizePost();
                }
            case 'put':
            case 'PUT':
                if (method_exists($this, 'authorizePut')) {
                    return $this->authorizePut();
                }
            case 'patch':
            case 'PATCH':
                if (method_exists($this, 'authorizePatch')) {
                    return $this->authorizePatch();
                }
            case 'delete':
            case 'DELETE':
                if (method_exists($this, 'authorizeDelete')) {
                    return $this->authorizeDelete();
                }
        }
    }
}