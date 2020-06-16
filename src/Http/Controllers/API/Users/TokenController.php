<?php

namespace Fusion\Http\Controllers\API\Users;

use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Fusion\Http\Controllers\Controller;
use Fusion\Http\Resources\TokenResource;
use Fusion\Http\Requests\Account\TokenRequest;

class TokenController extends Controller
{
    /**
     * Return a paginated resource.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Support\Collection
     */
    public function index(Request $request)
    {
        return TokenResource::collection(auth()->user()->tokens);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  TokenRequest  $request
     * @return TokenResource
     */
    public function store(TokenRequest $request)
    {
        $attributes = $request->validated();

        return new TokenResource(
            $request->user()->createToken(
                $attributes['name'],
                $attributes['abilities'] ?? []
            )
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  PersonalAccessToken $token
     * @return void
     */
    public function destroy(PersonalAccessToken $token)
    {
        $token->delete();
    }
}
