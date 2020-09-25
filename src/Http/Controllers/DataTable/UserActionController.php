<?php

namespace Fusion\Http\Controllers\DataTable;

use Illuminate\Support\Facades\Password;
use Fusion\Http\Controllers\Controller;
use Fusion\Models\User;

class UserActionController extends Controller
{
    public function enable()
    {
        foreach(request()->get('records') as $record) {
            User::find($record)->update([
                'status' => true
            ]);
        }
    }

    public function disable()
    {
        foreach(request()->get('records') as $record) {
            User::find($record)->update([
                'status' => false
            ]);
        }
    }

    public function delete()
    {
        foreach(request()->get('records') as $record) {
            User::find($record)->delete();
        }
    }

    public function verifyEmail()
    {
        foreach(request()->get('records') as $record) {
            User::find($record)->sendEmailVerificationNotification();
        }
    }

    public function resetPassword()
    {
        foreach(request()->get('records') as $record) {
            $user = User::find($record);

            $user->sendPasswordResetNotification(
                Password::broker()->createToken($user)
            );
        }
    }
}