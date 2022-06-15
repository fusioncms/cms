<?php
namespace Fusion\Actions;

use Illuminate\Support\Str;

abstract class BulkAction
{
    protected $permission;
    
    protected static $actions = [];

    protected $entries;

    public function __construct($entries = null)
    {
        $this->entries = $entries;
    }

    public function handle()
    {
        $this->process($this->entries);
    }

    public function authorize()
    {
        return true;
    }

    public function process($entries)
    {

    }

    public function toArray()
    {
        return [
            'name'       => $this->name(),
            'permission' => $this->permission,
            'route'      => '/api/bulk-action/'.$this->slug(),
        ];
    }

    public function slug() {
        $class = (new \ReflectionClass(static::class))->getShortName();
        return Str::kebab($class);
    }

    public function name()
    {
        $class = (new \ReflectionClass(static::class))->getShortName();

        return $class;
    }

    public static function register()
    {
        static::$actions = collect(static::$actions);
        $object = new static;
        $slug = $object->slug();

        if (!isset(static::$actions[$slug])) {
            static::$actions[$slug] = static::class;
        } else {
			$className = [];
            $className[] = static::class;
            $className[] = static::$actions[$slug];
            throw new \Exception('There is more than 1 action named "'.$slug.'" ('.implode(', ', $classNames).'), please use another name. ');
        }
    }

    public static function all()
    {
        return collect(self::$actions);
    }
}