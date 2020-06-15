<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;
use Fusion\Console\Actions\CheckServerRequirements;

class PermissionRequirements implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed   $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return CheckServerRequirements::verifyFolderPermissions();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return "Directory permissions do not meet requirements.";
    }
}
