<?php

namespace Fusion\Tests\Feature;

use Fusion\Tests\TestCase;
use Fusion\Console\Actions\SyncPermissions;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SyncPermissionsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group permissions
     */
    public function console_command_can_create_new_records()
    {
        (new SyncPermissions)->sync([
            'test' => [
                'foobar.show' => 'Show a Foobar'
            ]
        ]);

    	$this->assertDatabaseHas('permissions', [
    		'name'        => 'foobar.show',
    		'description' => 'Show a Foobar',
    	]);
    }

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group permissions
     */
    public function console_command_will_parse_condensed_form()
    {
        (new SyncPermissions)->sync([
            'test' => [
                'foobar' => [ 'show', 'create' ]
            ]
        ]);

        $this->assertDatabaseHas('permissions', [
            'name'        => 'foobar.show',
            'description' => 'Show a Foobar',
        ]);

        $this->assertDatabaseHas('permissions', [
            'name'        => 'foobar.create',
            'description' => 'Create a Foobar',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group permissions
     */
    public function console_command_can_update_existing_records()
    {
        (new SyncPermissions)->sync([
            'test' => [
                'foobar.show' => 'Show a Foobar'
            ]
        ]);

        (new SyncPermissions)->sync([
            'test' => [
                'foobar.show' => 'View a Foobar'
            ]
        ]);

        $this->assertDatabaseHas('permissions', [
            'name'        => 'foobar.show',
            'description' => 'View a Foobar',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group permissions
     */
    public function console_command_will_remove_undiscovered_records()
    {
        (new SyncPermissions)->sync([
            'test' => [
                'foobar.show' => 'Show a Foobar'
            ]
        ]);

        (new SyncPermissions)->sync([
            'test' => [
                'foobar.create' => 'Create a Foobar'
            ]
        ]);

        $this->assertDatabaseMissing('permissions', [
            'name'        => 'foobar.show',
            'description' => 'Show a Foobar',
        ]);

        $this->assertDatabaseHas('permissions', [
            'name'        => 'foobar.create',
            'description' => 'Create a Foobar',
        ]);
    }
}