<?php

namespace Fusion\Tests\Feature\Form;

use Facades\FormFactory;
use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ResponseTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();
        // --
        
        $this->form = \Facades\FormFactory::withName('Reply All')->create();
        
        $this->form->responses()->createMany([
            [ 'form_id' => $this->form->id, 'identifiable_ip_address' => $this->faker->ipv4 ],
            [ 'form_id' => $this->form->id, 'identifiable_ip_address' => $this->faker->ipv4 ],
            [ 'form_id' => $this->form->id, 'identifiable_ip_address' => $this->faker->ipv4 ],
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_guest_cannot_create_a_response()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', "/api/forms/{$this->form->slug}/responses", []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_user_without_permission_cannot_view_any_responses()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/forms/{$this->form->slug}/responses");
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_user_without_permission_cannot_view_a_response()
    {
        $this->expectException(AuthorizationException::class);

        $response = $this->form->responses->first();

        $this
            ->be($this->user, 'api')
            ->json('GET', "/api/forms/{$this->form->slug}/responses/{$response->id}");
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_user_without_permission_cannot_create_a_response()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', "/api/forms/{$this->form->slug}/responses", []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_user_without_permission_cannot_update_any_responses()
    {
        $this->expectException(AuthorizationException::class);

        $response = $this->form->responses->first();

        $this
            ->be($this->user, 'api')
            ->json('PATCH', "/api/forms/{$this->form->slug}/responses/{$response->id}", []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group response
     * @group auth
     */
    public function a_user_without_permission_cannot_delete_any_responses()
    {
        $this->expectException(AuthorizationException::class);

        $response = $this->form->responses->first();

        $this
            ->be($this->user, 'api')
            ->json('DELETE', "/api/forms/{$this->form->slug}/responses/{$response->id}");
    }
}