<?php

namespace Fusion\Providers;

use Fusion\Facades\Menu;
use Fusion\Models\Disk;
use Fusion\Models\Matrix;
use Fusion\Models\Taxonomy;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        if (app_installed()) {
            Menu::set(['admin' => $this->adminNavigation()]);
        }
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('menu', function () {
            return new \Fusion\Services\Menu();
        });
    }

    private function getFileManagerDisks()
    {
        $disks = Disk::all();

        if ($disks->count() == 1) {
            return ['title' => 'File Manager', 'to' => "/files/{$disk->first()->handle}", 'icon' => 'images'];
        }

        return [
            'title'    => 'File Manager',
            'icon'     => 'images',
            'children' => $disks->mapWithKeys(function ($disk) {
                return [$disk->handle => ['title' => $disk->name, 'to' => "/files/{$disk->id}"]];
            }),
        ];
    }

    /**
     * Generate Admin Navigation.
     *
     * @return array
     */
    private function adminNavigation()
    {
        $items = collect([
            // -- General --
            'dashboard'   => ['title' => 'Dashboard', 'to' => '/', 'icon' => 'grip-horizontal', 'permission' => 'access.controlPanel'],
            'filemanager' => $this->getFileManagerDisks(),
            'inbox'       => ['title' => 'Inbox', 'to' => '/inbox', 'icon' => 'inbox'],
            'addons.list' => ['title' => 'Addons', 'to' => '/addons', 'icon' => 'puzzle-piece'],
        ]);

        // matrices
        $matrices = Matrix::sidebar()->get()->mapWithKeys(function ($item) {
            if ($item->has('children') and $item->children->count()) {
                $subitems = $item->children->mapWithKeys(function ($subitem) {
                    $name   = $subitem->name;
                    $handle = str_handle($name);
                    $path   = $subitem->adminPath;

                    return [$handle => ['title' => $name, 'to' => $path]];
                });

                $name   = $item->name;
                $handle = str_handle($name);
                $path   = $item->adminPath;

                return [$item->handle => [
                    'title'    => $item->name,
                    'icon'     => $item->icon ?: 'pencil-alt',
                    'children' => collect([
                        $handle => ['title' => $name, 'to' => $path],
                    ])->merge($subitems),
                ]];
            }

            return [$item->handle => [
                'title' => $item->name,
                'to'    => $item->adminPath,
                'icon'  => $item->icon ?: 'pencil-alt',
            ]];
        });

        if ($matrices->isNotEmpty()) {
            $items->put('content', ['title' => 'Content', 'divider'  => true]);
            $items = $items->merge($matrices);
        }

        // taxnomies
        $taxonomies = Taxonomy::where('sidebar', true)->orderBy('name')->get();
        if ($taxonomies->isNotEmpty()) {
            $taxonomies = $taxonomies->mapWithKeys(function ($item) {
                return [$item->handle => [
                    'title' => $item->name,
                    'to'    => $item->adminPath,
                    'icon'  => $item->icon ?: 'tag',
                ]];
            });

            $items->put('content', ['title' => 'Organize', 'divider'  => true]);
            $items = $items->merge($taxonomies);
        }

        $items = $items->merge([
            'system' => [
                'title'   => 'System',
                'divider' => true,
            ],
            'seo' => [
                'title'    => 'SEO',
                'icon'     => 'chart-bar',
                'children' => [
                    'insight' => ['title' => 'Insight', 'to' => '/insight'],
                ],
            ],
            'configure' => [
                'title'    => 'Configure',
                'icon'     => 'sliders-h',
                'children' => [
                    'blueprints' => ['title' => 'Blueprints', 'to' => '/blueprints'],
                    'fieldsets'  => ['title' => 'Fieldsets', 'to'  => '/fieldsets'],
                    'forms'      => ['title' => 'Forms',      'to' => '/forms'],
                    'matrices'   => ['title' => 'Matrix',     'to' => '/matrices'],
                    'navigation' => ['title' => 'Navigation', 'to' => '/navigation'],
                    'taxonomies' => ['title' => 'Taxonomy',   'to' => '/taxonomies'],
                    'theme'      => ['title' => 'Theme',      'to' => '/theme'],
                ],
            ],
            'tools' => [
                'title'    => 'Tools',
                'icon'     => 'tools',
                'children' => [
                    'disks'   => ['title' => 'Disks',   'to' => '/disks'],
                    'backups' => ['title' => 'Backups', 'to' => '/backups'],
                    'logs'    => ['title' => 'Logs',    'to' => '/logs'],
                    'scripts' => ['title' => 'Scripts', 'to' => '/scripts'],
                ],
            ],
            'users' => [
                'title'    => 'Users',
                'icon'     => 'users',
                'children' => [
                    'users'       => ['title' => 'Users', 'to' => '/users', 'permission' => 'users.viewAny'],
                    'roles'       => ['title' => 'Roles', 'to' => '/roles', 'permission' => 'roles.viewAny'],
                    'permissions' => ['title' => 'Permissions', 'to' => '/permissions', 'permission' => 'permissions.viewAny'],
                ],
            ],
            'customize' => [
                'title' => 'Customize',
                'to'    => '/customize',
                'icon'  => 'paint-roller',
            ],
            'updates' => [
                'title' => 'Updates',
                'to'    => '/updates',
                'icon'  => 'download',
            ],
            'settings' => [
                'title' => 'Settings',
                'to'    => '/settings',
                'icon'  => 'cog',
            ],
        ]);

        return $items->toArray();
    }
}
