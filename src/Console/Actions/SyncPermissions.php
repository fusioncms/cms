<?php

namespace Fusion\Console\Actions;

use Fusion\Models\Permission;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Spatie\Permission\PermissionRegistrar;
use Symfony\Component\Finder\Finder;

class SyncPermissions
{
    /**
     * Execute the command.
     *
     * @return void
     */
    public function handle()
    {
        $this->sync(
            $this->fetchPermissions(fusion_path('permissions'))
        );
    }

    /**
     * Sync incoming permissions with existing.
     *
     * @param array $permissions
     *
     * @return void
     */
    public function sync($permissions)
    {
        // Pull all existing permissions..
        $existing = Permission::all()->pluck('id', 'id');

        foreach ($permissions as $group => $values) {
            foreach (Arr::dot($values) as $name => $value) {

                // Allow for condensed version w/ autogen description.
                // i.e. 'single' => [ 'show', 'create', ... ]
                $matches = [];

                if (preg_match('/([a-z]+)\.(\d+)/i', $name, $matches)) {
                    $name = str_replace($matches[2], $value, $name);
                    $value = ucfirst($value).' a '.Str::of($matches[1])->singular()->ucfirst();
                }

                $permission = Permission::updateOrCreate(
                    ['name' => $name],
                    [
                        'guard_name'  => '*',
                        'description' => $value,
                    ]
                );

                // Unset for later cleanup..
                unset($existing[$permission->id]);
            }
        }

        // Clean up removed permissions..
        foreach ($existing as $id) {
            Permission::findOrFail($id)->delete();
        }

        // Clear permission cache..
        resolve(PermissionRegistrar::class)->forgetCachedPermissions();
    }

    /**
     * Fetch all permission files.
     *
     * @param string $directory
     *
     * @return array
     */
    protected function fetchPermissions($directory)
    {
        $files = Finder::create()->files()->name('*.php')->in($directory);
        $data = [];

        foreach ($files as $file) {
            $name = basename($file->getRealPath(), '.php');

            $data[$name] = require $file->getRealPath();
        }

        ksort($data, SORT_NATURAL);

        return $data;
    }
}
