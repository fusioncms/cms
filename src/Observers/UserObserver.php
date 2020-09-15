<?php

namespace Fusion\Observers;

use Fusion\Models\User;

class UserObserver
{
    /**
     * Handle "created" event.
     *
     * @param \Fusion\Models\User $user
     *
     * @return void
     */
    public function created(User $user)
    {
        $this->regulateOwnerRole($user);
    }

    /**
     * Handle "updated" event.
     *
     * @param \Fusion\Models\User $user
     *
     * @return void
     */
    public function updated(User $user)
    {
        $this->regulateOwnerRole($user);
    }

    /**
     * Regulate `owner` role so only one user
     *   can be assigned it at a time.
     *   
     * @return void
     */
    private function regulateOwnerRole(User $user)
    {
        if ($role = request()->input('role')) {
            if ($role === 'owner') {
                User::role('owner')
                    ->where('id', '<>', $user->id)
                    ->each(function ($user) {
                        $user->syncRoles('admin');
                    });
            }

            $user->assignRole($role);
        }
    }
}
