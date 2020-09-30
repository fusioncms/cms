<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class FreshPassword implements Rule
{
    /**
     * Verify user creates a fresh password.
     * (different from their current one).
     *
     * @param string $attribute
     * @param mixed  $value
     *
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return request()->user() &&
               ! Hash::check($value, request()->user()->password);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'New password must differ from current password.';
    }
}
