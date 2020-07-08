<?php

namespace Fusion\Http\Controllers\Web\Installer;

use Exception;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Artisan;
use Fusion\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class InstallController extends Controller
{
    /**
     * Installation wizard confirmation.
     *
     * @param  Request $request
     * @return View
     */
    public function index(Request $request)
    {
        return view('installer.confirm', [
            'data' => cache(config('installer.wizard.storage.key'), [])
        ]);
    }

    /**
     * Install FusionCMS.
     *
     * @param  Request $request
     * @return Redirect
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            ($data = $this->getData()),
            $this->getRules(),
            $this->getMessages()
        );

        if ($validator->fails()) {
            return back()->withErrors('Invalid!');
        }

        $jobs = [
            'Deleting asset files...'           => new \Fusion\Console\Uninstaller\DeleteUserFiles,
            'Deleting model files...'           => new \Fusion\Console\Uninstaller\DeleteModelFiles,
            'Deleting addon assets...'          => new \Fusion\Console\Uninstaller\DeleteAddonAssets,
            'Deleting addon cache...'           => new \Fusion\Console\Uninstaller\DeleteAddonCache,
            'Deleting log files...'             => new \Fusion\Console\Uninstaller\DeleteLogFiles,
            'Deleting database...'              => new \Fusion\Console\Uninstaller\DeleteDatabase,

            'Creating directories...'           => new \Fusion\Console\Installer\CreateDirectories,
            'Creating database...'              => new \Fusion\Console\Installer\CreateDatabase($data),
            'Creating environment config...'    => new \Fusion\Console\Installer\CreateEnvironmentConfig($data),
            'Creating database tables...'       => new \Fusion\Console\Installer\CreateDatabaseTables,
            'Publishing Fusion resources...'    => new \Fusion\Console\Installer\PublishFusionResources,
            'Creating storage link...'          => new \Fusion\Console\Installer\CreateStorageLink,
            'Creating default permissions...'   => new \Fusion\Console\Installer\CreateDefaultPermissions,
            'Creating default roles...'         => new \Fusion\Console\Installer\CreateDefaultRoles,
            'Creating default user account...'  => new \Fusion\Console\Installer\CreateDefaultUser($data),
        ];

        foreach ($jobs as $message => $instance) {
            try {
                dispatch_now($instance);
            } catch (Exception $exception) {
                Log::error($exception->getMessage(), (array) $exception->getTrace()[0]);

                return back();
            }
        }

        Artisan::call('fusion:sync');
        Artisan::call('config:clear');
        Artisan::call('addon:discover');

        return redirect('/admin');
    }

    /**
     * Returns formatted data.
     *
     * @return array
     */
    private function getData()
    {
        return collect(cache(config('installer.wizard.storage.key'), []))
            ->flatMap(function($item) {
                return $item;
            })->toArray();
    }

    /**
     * Returns formatted rules.
     *
     * @return array
     */
    private function getRules()
    {
        return collect(config('installer.wizard.steps'))
            ->mapWithKeys(function($item, $step) {
                return collect($item['rules'] ?? [])
                    ->mapWithKeys(function($value, $field) use ($step) {
                        return [ $field => $value ];
                    });
            })->toArray();
    }

    /**
     * Returns formatted messages.
     *
     * @return array
     */
    private function getMessages()
    {
        return collect(config('installer.wizard.steps'))
            ->mapWithKeys(function($item, $step) {
                return collect($item['messages'] ?? [])
                    ->mapWithKeys(function($value, $field) use ($step) {
                        return [ $field => $value ];
                    });
            })->toArray();
    }
}
