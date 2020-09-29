<?php

namespace Fusion\Rules;

use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Validation\Rule;

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
        return ! Hash::check($value, request()->user()->password);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "Password must differ from your current one.";
    }
}
