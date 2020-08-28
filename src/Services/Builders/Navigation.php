<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Builder as BuilderContract;
use Fusion\Models\Navigation as NavigationModel;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Navigation extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $navigation;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Navigation';

    /**
     * @var \Fusion\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create a new Navigation instance.
     *
     * @param string $navigation
     */
    public function __construct($navigation)
    {
        parent::__construct();

        $this->navigation = NavigationModel::where('handle', $navigation)->firstOrFail();
        $this->model      = $this->make();
    }

    /**
     * Make a new navigation model instance.
     */
    public function make()
    {
        $className = Str::studly($this->navigation->handle);
        $traits    = [];
        $fillable  = ['navigation_id', 'name', 'url', 'new_window', 'order', 'status'];
        $casts     = [
            'order'      => 'integer',
            'new_window' => 'boolean',
            'status'     => 'boolean',
        ];

        if ($this->navigation->fieldset) {
            $fields = $this->navigation->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype  = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle.'\' => \''.$fieldtype->cast;
            }
        }

        $path = fusion_path('/src/Models/Navigation/'.$className.'.php');
        $stub = File::get(fusion_path('/stubs/matrices/navigation.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->navigation->handle,
            '{fillable}'      => '[\''.implode('\', \'', $fillable).'\']',
            '{casts}'         => '[\''.implode('\', \'', $casts).'\']',
            '{with}'          => '[\''.implode('\', \'', $this->getWith()).'\']',
            '{dates}'         => '[\''.implode('\', \'', $this->getDates()).'\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{navigation_id}'       => $this->navigation->id,
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('Fusion\Models\Navigation\\'.$className);
    }

    /**
     * Get the navigation.
     */
    public function get()
    {
        return $this->model->where('navigation_id', $this->navigation->id)->firstOrCreate(['navigation_id' => $this->navigation->id]);
    }
}
