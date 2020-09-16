# Set Password Notification

You are receiving this email because a new account has been created for you.
Please click the button below to set your password.

@component('mail::button', ['url' => $this->url])
Set Password
@endcomponent

This password reset link will expire in {{ config('auth.passwords.'.config('auth.defaults.passwords').'.expire') }} minutes.

If you did not request a password reset, no further action is required.

Thanks,<br>
{{ config('app.name') }}
