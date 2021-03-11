<?php

namespace Fusion\Services\Addons;

use ReflectionClass;
use Illuminate\Support\Str;

class Addon 
{
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
}
