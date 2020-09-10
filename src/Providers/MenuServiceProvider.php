<?php

namespace Fusion\Providers;

use Fusion\Facades\Menu;
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

    /**
     * Generate Admin Navigation.
     *
     * @return array
     */
    private function adminNavigation()
    {
        $items = collect([
            'dashboard'   => ['title' => 'Dashboard',    'to' => '/',      'icon' => 'grip-horizontal'],
            'filemanager' => ['title' => 'File Manager', 'to' => '/files', 'icon' => 'images'],
            'inbox'       => ['title' => 'Inbox',        'to' => '/inbox', 'icon' => 'inbox'],
        ]);

        // matrices
        $matrices = Matrix::where('sidebar', true)->where('parent_id', 0)->orderBy('name')->get();
        if ($matrices->isNotEmpty()) {
            $matrices = $matrices->mapWithKeys(function ($item) {
                if ($item->has('children') and $item->children->count()) {
                    $subitems = $item->children->mapWithKeys(function ($item) {
                        $name   = $item->type == 'single' ? $item->reference_singular : $item->reference_plural;
                        $handle = str_handle($name);
                        $path   = $item->adminPath;

                        return [$handle => ['title' => $name, 'to' => $path]];
                    });

                    $name   = $item->type == 'single' ? $item->reference_singular : $item->reference_plural;
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
                    'extensions' => ['title' => 'Extensions', 'to' => '/extensions'],
                    'fieldsets'  => ['title' => 'Fieldsets',  'to' => '/fieldsets'],
                    'forms'      => ['title' => 'Forms',      'to' => '/forms'],
                    'mailables'  => ['title' => 'Mailables',  'to' => '/mailables'],
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
                    'backups' => ['title' => 'Backups', 'to' => '/backups'],
                    'logs'    => ['title' => 'Logs',    'to' => '/logs'],
                ],
            ],
            'users' => [
                'title'    => 'Users',
                'icon'     => 'users',
                'children' => [
                    'users'       => ['title' => 'Users',       'to' => '/users'],
                    'roles'       => ['title' => 'Roles',       'to' => '/roles'],
                    'permissions' => ['title' => 'Permissions', 'to' => '/permissions'],
                ],
            ],
            'customize' => [
                'title' => 'Customize',
                'to'    => '/customize',
                'icon'  => 'paint-roller',
            ],
            'addons' => [
                'title' => 'Addons',
                'to'    => '/addons',
                'icon'  => 'box-open',
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
