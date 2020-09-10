<?php

namespace Fusion\Services;

use Illuminate\Support\Arr;

class Menu
{
    /**
     * Items.
     *
     * @var array
     */
    protected $items = [];

    /**
     * Item exists?
     *
     * @param string $key
     *
     * @return bool
     */
    public function has($key)
    {
        return Arr::has($this->items, $key);
    }

    /**
     * Get the specified item.
     *
     * @param array|string $key
     * @param mixed        $default
     *
     * @return mixed
     */
    public function get($key, $default = null)
    {
        if (is_array($key)) {
            return $this->getMany($key);
        }

        return Arr::get($this->items, $key, $default);
    }

    /**
     * Get the specified items.
     *
     * @param array $keys
     *
     * @return array
     */
    public function getMany($keys)
    {
        $items = [];

        foreach ($keys as $key => $default) {
            if (is_numeric($key)) {
                [$key, $default] = [$default, null];
            }

            $items[$key] = Arr::get($this->items, $key, $default);
        }

        return $items;
    }

    /**
     * Set a given item.
     *
     * @param array|string $key
     * @param mixed        $value
     *
     * @return void
     */
    public function set($key, $value = null)
    {
        $keys = is_array($key) ? $key : [$key => $value];

        foreach ($keys as $key => $value) {
            Arr::set($this->items, $key, $value);
        }
    }
}
