<?php

namespace Fusion\Tests\Feature\Fieldtypes;

use Fusion\Tests\TestCase;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ValidationTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function a_user_without_control_panel_access_cannot_validate_a_fieldtype()
    {
        $this->expectException(AuthenticationException::class);

        $this->json('POST', '/api/fields/validate', []);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function a_user_without_permissions_cannot_validate_a_fieldtype()
    {
        $this->expectException(AuthorizationException::class);

        $this
            ->be($this->user, 'api')
            ->json('POST', '/api/fields/validate', ['type' => ['handle' => 'input']]);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function a_user_with_permissions_can_validate_a_fieldtype()
    {
    	$this
    		->be($this->owner, 'api')
            ->json('POST', '/api/fields/validate', [
            	'name'   => 'Input',
            	'handle' => 'input',
            	'type'   => ['handle' => 'input'],
            ])
            ->assertStatus(200);
    }

    /**
     * @test
     * @group fusioncms
     * @group feature
     * @group fieldtypes
     */
    public function a_new_field_requires_a_valid_fieldtype()
    {
    	$this
    		->be($this->owner, 'api')
            ->json('POST', '/api/fields/validate', [
            	'name'   => 'Fake Field',
            	'handle' => 'fake-field',
            	'type'   => ['handle' => 'fake'],
            ])
            ->assertStatus(422)
            ->assertJsonValidationErrors([
            	'type' => 'Fieldtype not found in registry. [fake]'
            ]);
    }
}