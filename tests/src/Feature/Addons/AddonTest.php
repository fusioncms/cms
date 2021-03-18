<?php

namespace Fusion\Tests\Feature\Addons;

use Acme\Myaddon\Models\Acme;
use Composer\Autoload\ClassLoader;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class AddonTest extends TestCase
{
	use RefreshDatabase;

	public function setUp(): void
    {
        parent::setUp();
        $this->handleValidationExceptions();

        // Mock w/ Addon..
        $manifest = app('addons.manifest');
        $manifest->mock($this->getBasePath("../addons/acme/myaddon"));

        // Re-sync..
        Artisan::call('fusion:sync');
	}

	/** @test */
    public function addon_will_run_its_own_migrations()
    {
    	$this->assertDatabaseHasTable('acmes');
    }

    /** @test */
    public function addon_will_register_its_own_model_factories()
    {
    	$acme = Acme::factory()->create();

    	$this->assertInstanceOf(Acme::class, $acme);
    }

    /** @test */
    public function addon_will_register_and_manage_its_own_config_namespace()
    {
    	$this->assertTrue(config('myaddon.foo') == 'bar');

    	config(['myaddon.foo' => 'baz']);

    	$this->assertTrue(config('myaddon.foo') == 'baz');
    }

    /** @test */
    public function addon_will_register_its_own_permissions()
    {
    	$this->assertDatabaseHas('permissions', ['name' => 'acme.viewAny']);
        $this->assertDatabaseHas('permissions', ['name' => 'acme.view']);
        $this->assertDatabaseHas('permissions', ['name' => 'acme.create']);
        $this->assertDatabaseHas('permissions', ['name' => 'acme.update']);
        $this->assertDatabaseHas('permissions', ['name' => 'acme.delete']);
    }

    /** @test */
    public function addon_will_register_its_own_routes()
    {
        $this
            ->be($this->owner, 'api')
            ->json('GET', '/api/acme')
            ->assertOk();
    }

    /** @test */
    public function addon_will_register_its_own_settings()
    {
    	$this->assertDatabaseHasTable('settings_myaddon');

        // TODO:
        // $this->assertEquals(setting('myaddon.allow_likes'), 'enabled');
        // setting(['myaddon.allow_likes' => 'disabled']);
        // $this->assertEquals(setting('myaddon.allow_likes'), 'disabled');
    }

    /** @test */
    public function addon_will_register_its_own_event_listeners()
    {
        $this->assertTrue(
            Event::hasListeners(\Acme\Myaddon\Events\AcmeEvent::class)
        );
    }

    /** @test */
    public function addon_will_register_its_own_event_subscribers()
    {
        /**
         * Registered through `\Acme\Myaddon\Listener\AcmeEventSubscriber`
         */
        $this->assertTrue(
            Event::hasListeners(\Acme\Myaddon\Events\AcmeSubscription::class)
        );
    }

    /** @test */
    public function addon_will_register_its_own_artisan_commands()
    {
        $this->artisan('acme:motivate')->expectsOutput('You can do it!');
    }
}