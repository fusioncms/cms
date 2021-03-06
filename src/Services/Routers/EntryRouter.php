<?php

namespace Fusion\Services\Routers;

use Fusion\Models\Matrix;
use Fusion\Services\Builders;
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
                continue;
            }

            // Eager load our relatable fields
            $relationships = [];

            foreach ($matrix->blueprint->fields as $field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $relationships[] = $field->handle;
                }
            }

            $model = Builders\Matrix::resolve($matrix->handle);
            $page  = $model->with($relationships)->where('slug', $found->parameter('slug'));

            if (request()->has('preview')) {
                $page = $page->withoutGlobalScopes();
            }

            $page = $page->first();

            if (is_null($page)) {
                continue;
            }

            if (!$page->status) {
                if (Gate::denies('access.controlPanel') || !request()->has('preview')) {
                    continue;
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
