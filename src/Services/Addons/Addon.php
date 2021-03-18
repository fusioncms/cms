<?php

namespace Fusion\Services\Addons;

use ReflectionClass;
use Illuminate\Database\Migrations\Migrator;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Addon 
{
    /**
     * @var \Illuminate\Database\Migrations\Migrator
     */
    protected $migrator;

	/**
	 * @var array
	 */
	protected $data;

	/**
	 * Contruct new instance.
	 * 
	 * @param array $properties
	 */
    public function __construct($properties)
    {
        $this->migrator = app('migrator');

    	foreach($properties as $key => $value) {
    		$this->data[$key] = $value;
    	}
    }

    /**
     * Magic getter.
     *
     * @throws Exception
     * @param  string $key
     * @return mixed
     */
    public function __get($key) {
    	return data_get($this->data, $key);
    }

    /**
     * Returns slug representation of Addon name.
     * 
     * @return string|null
     */
    public function getSlug()
    {
        return Str::slug($this->name);
    }

    /**
     * Returns publish tag.
     * 
     * @return string
     */
    public function getPublishTag()
    {
        return 'addon-'.$this->getSlug();
    }

    /**
     * Returns relative folder path.
     * 
     * @return string|null
     */
    public function getPath($path = '')
    {
        return $this->rootPath().ltrim($path, '/');
    }

    /**
     * Returns root folder path of Addon.
     * 
     * @return string|null
     */
    public function rootPath() {
        if (!$this->provider) {
            return null;
        }

        $reflect  = new ReflectionClass($this->provider);
        $rootPath = Str::before($reflect->getFileName(), 'src/');

        return rtrim($rootPath, '/').'/';
    }

    /**
     * Returns `target` & `link` for syncing published resources.
     * 
     * @return array
     */
    public function getResourceLink()
    {
        return [ $this->getPath('public') => public_path('vendor/'.$this->getSlug()) ];
    }

    /**
     * Publish publishables.
     * 
     * @return void
     */
    public function publish()
    {
        Artisan::call('vendor:publish', [
            '--tag'   => $this->getPublishTag(),
            '--force' => true,
        ]);
    }

    /**
     * Unpublish publishables.
     * 
     * @return void
     */
    public function unpublish()
    {
        $slug = $this->getSlug();

        File::delete(fusion_path("settings/vendor/{$slug}.php"));
        File::delete(fusion_path("notifications/vendor/{$slug}.php"));
        File::delete(fusion_path("permissions/vendor/{$slug}.php"));
    }

    /**
     * Sync.
     * 
     * @return void
     */
    public function sync()
    {
        $this->runMigrations();
        $this->publish();
    }

    /**
     * Uninstall.
     * 
     * @return void
     */
    public function uninstall()
    {
        $this->rollbackMigrations();
        $this->unpublish();
    }

    /**
     * Run migrations.
     * 
     * @return void
     */
    protected function runMigrations()
    {
        $this->migrator->run($this->getPath('database/migrations'));
    }

    /**
     * Rollback migrations.
     * 
     * @return void
     */
    protected function rollbackMigrations()
    {
        $this->migrator->rollback($this->getPath('database/migrations'));
    }
}
