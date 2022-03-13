<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Taxonomy;
use Fusion\Services\Builders\Taxonomy as TaxonomyBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class TaxonomyRouter extends Router
{
    public function handle(Request $request)
    {
        $collections = Taxonomy::where('route', '<>', '')
            ->where('template', '<>', '')
            ->get();

        foreach ($collections as $taxon) {
            $found = $this->matchRoute($taxon->route, $request);

            if ($found === false) {
                continue;
            }

            // Eager load our relatable fields
            $relationships = [];

            foreach ($taxon->blueprint->fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $relationships[] = $field->handle;
                }
            }

            $model = (new TaxonomyBuilder($taxon->handle))->make();
            $page  = $model->with($relationships)->where('slug', $found->parameter('slug'))->first();

            if (is_null($page)) {
                continue;
            }

            if (!$page->status) {
                if (Gate::denies('access.controlPanel') || !request()->has('preview')) {
                    continue;
                }
            }

            $data = $this->bindRouteData($taxon->route, $request, [
                'taxon' => $taxon,
                'page'   => $page,
            ]);

            return view($taxon->template, $data);
        }
    }
}
