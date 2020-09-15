<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Fusion\Services\Builders\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class EntryRouter extends Router
{
    public function handle(Request $request)
    {
        $collections = Matrix::where('type', 'collection')
            ->where('route', '<>', '')
            ->where('template', '<>', '')
            ->get();

        foreach ($collections as $matrix) {
            $found = $this->matchRoute($matrix->route, $request);

            if ($found === false) {
                continue 1;
            }

            // Eager load our relatable fields
            $relationships = [];

            foreach ($matrix->blueprint->fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $relationships[] = $field->handle;
                }
            }

            $model = (new Collection($matrix->handle))->make();
            $page  = $model->with($relationships)->where('slug', $found->parameter('slug'))->first();

            if (is_null($page)) {
                continue 1;
            }

            if (!$page->status) {
                if (Gate::denies('access.controlPanel') || !request()->has('preview')) {
                    continue 1;
                }
            }

            $data = $this->bindRouteData($matrix->route, $request, [
                'matrix' => $matrix,
                'page'   => $page,
            ]);

            return view($matrix->template, $data);
        }
    }
}
