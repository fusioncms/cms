<?php

namespace Fusion\Models;

use Exception;
use File;
use Fusion\Facades\Theme;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use ReflectionClass;
use ReflectionProperty;

class Mailable extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'handle',
        'namespace',
        'markdown',
        'status',
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        'status' => 'boolean',
    ];

    /**
     * Appends custom attributes.
     *
     * @var array
     */
    protected $appends = ['theme'];

    /**
     * Get resolved DatabaseMailable class.
     * [Derived].
     *
     * @return DatabaseMailable
     */
    public function getMailableAttribute()
    {
        return resolve($this->namespace);
    }

    /**
     * Get which Theme this Mailable comes from.
     * [Derived].
     *
     * @return DatabaseMailable
     */
    public function getThemeAttribute()
    {
        if (Str::startsWith($this->namespace, 'Themes')) {
            return explode('\\', $this->namespace)[1];
        }

        return false;
    }

    /**
     * Scope a query to only include active mailables.
     * AKA Fusion and Current Theme.
     *
     * @param Builder $query
     *
     * @return Builder
     */
    public function scopeActive($query)
    {
        $namespace = Theme::active()->get('namespace');

        return $query->where('namespace', 'like', "Themes\\\\{$namespace}%")
                     ->orWhere('namespace', 'like', "Fusion\\\Mail%");
    }

    /**
     * Get `placeholder` attribute.
     * [Derived].
     *
     * @return Collection
     */
    public function getPlaceholdersAttribute()
    {
        $reflection = new ReflectionClass($this->mailable);
        $properties = $reflection->getProperties(ReflectionProperty::IS_PUBLIC);

        return collect($properties)->map(function ($property) {
            if ($property->getDeclaringClass()->getName() == $this->namespace) {
                return [$property->getName() => $property->getValue($this->mailable)];
            }
        })->collapse()->filter()->map(function ($value, $name) {
            if ($value instanceof Model) {
                return $value->getFillable();
            } elseif ($value instanceof Collection) {
                return $value->keys();
            } elseif (is_array($value)) {
                if (Arr::isAssoc($value)) {
                    return array_keys($value);
                } else {
                    return array_values($value);
                }
            } else {
                return $name;
            }
        });
    }

    /**
     * Register new Mailables in storage.
     * [Helper].
     *
     * @return void
     */
    public static function registerNewMailables()
    {
        $namespace = Theme::active()->get('namespace');

        $fusionMailFiles = File::files(__DIR__.'/../Mail');
        $themeMailFiles  = File::files(theme_path("{$namespace}/src/Mail"));

        // Resolve fusion mailables..
        foreach ($fusionMailFiles as $file) {
            self::resolveNewMailable('Fusion\\Mail\\'.$file->getFilenameWithoutExtension());
        }

        // Resolve theme mailables..
        foreach ($themeMailFiles as $file) {
            self::resolveNewMailable("Themes\\{$namespace}\\Mail\\{$file->getFilenameWithoutExtension()}");
        }
    }

    /**
     * Resolve and create new Database Mailable.
     * [Helper].
     *
     * @param string $namespace
     *
     * @return void
     */
    private static function resolveNewMailable($namespace)
    {
        $reflection = new ReflectionClass($namespace);

        if ($reflection->isSubclassOf('Fusion\Mail\DatabaseMailable')) {
            $mailable = resolve($namespace);

            try {
                static::firstOrCreate([
                    'name'      => $mailable->getName(),
                    'handle'    => $mailable->getHandle(),
                    'namespace' => $namespace,
                    'markdown'  => File::get($mailable->getTemplate()->getPath()),
                ]);
            } catch (Exception $exception) {
                logger()->error($exception->getMessage());
            }
        }
    }
}
