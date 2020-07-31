<?php

namespace Fusion\Console\Installer;

use Fusion\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateDefaultUser
{
    /**
     * @var array
     */
    protected $container;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(array $container)
    {
        $this->container = $container;
    }

    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        activity()->withoutLogs(function () {
            User::create([
                'name'              => $this->container['user_name'],
                'email'             => $this->container['user_email'],
                'password'          => Hash::make($this->container['user_password']),
                'status'            => true,
                'email_verified_at' => now(),
            ])->assignRole('owner');
        });
    }
}
