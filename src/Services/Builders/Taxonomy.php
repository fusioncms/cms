<?php

namespace Fusion\Services\Builders;

use Fusion\Models\Field;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Fusion\Models\Taxonomy as TaxonomyModel;
use Fusion\Contracts\Builder as BuilderContract;

class Taxonomy extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $taxonomy;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Taxonomy';

    /**
     * @var \Fusion\Database\Eloquent\Model
     */
    protected $model;

    /**
     * Create a new Taxonomy instance.
     *
     * @param  string  $taxonomy
     */
    public function __construct($taxonomy)
    {
        parent::__construct();

        $this->taxonomy = TaxonomyModel::where('handle', $taxonomy)->firstOrFail();
        $this->model    = $this->make();
    }

    /**
     * Make a new taxonomy model instance.
     */
    public function make()
    {
        $className = Str::studly($this->taxonomy->handle);
        $traits    = [];
        $fillable  = ['taxonomy_id', 'parent_id', 'name', 'slug', 'status'];
        $casts     = [];

        if ($this->taxonomy->fieldset) {
            $fields    = $this->taxonomy->fieldset->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle . '\' => \'' . $fieldtype->cast ;
            }
        }

        $path = fusion_path('/src/Models/Taxonomies/'.$className.'.php');
        $stub = File::get(fusion_path('/stubs/matrices/taxonomy.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{handle}'        => $this->taxonomy->handle,
            '{fillable}'      => '[\'' . implode('\', \'', $fillable) . '\']',
            '{casts}'         => '[\'' . implode('\', \'', $casts) . '\']',
            '{with}'          => '[\'' . implode('\', \'', $this->getWith()) . '\']',
            '{dates}'         => '[\'' . implode('\', \'', $this->getDates()) . '\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{taxonomy_id}'   => $this->taxonomy->id,
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('Fusion\Models\Taxonomies\\'. $className);
    }

    /**
     * Get the taxonomy.
     */
    public function get()
    {
        return $this->model->where('taxonomy_id', $this->taxonomy->id)->firstOrCreate(['taxonomy_id' => $this->taxonomy->id]);
    }
}
