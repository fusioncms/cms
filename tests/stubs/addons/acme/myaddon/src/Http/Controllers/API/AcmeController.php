<?php

namespace Acme\Myaddon\Http\Controllers\API;

use Fusion\Http\Controllers\Controller;


class AcmeController extends Controller
{
	public function index(Request $request)
	{
		$this->authorize('acme.viewAny');

		$items = Acme::paginate();

		return AcmeResource::collection($items);
	}

	public function show(Request $request, Acme $acme)
	{
		$this->authorize('acme.view');

		return new AcmeResource($acme);
	}

	public function store(AcmeRequest $request)
	{
		$acme = Acme::create($request->validated());

		return new AcmeResource($acme);
	}

	public function update(AcmeRequest $request, Acme $acme)
	{
		$acme->update($request->validated());

		return new AcmeResource($acme);
	}

	public function destroy(AcmeRequest $request, Acme $acme)
	{
		$this->authorize('acme.delete');

		$acme->delete();
	}
}