<?php

namespace Fusion\Tests\Feature\Settings;

use Fusion\Fieldtypes\ListFieldtype;
use Fusion\Providers\SettingServiceProvider;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OptionalSettingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Called before each test is run...
     *
     * @return void
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_setting_without_validation_rules_will_be_saved()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/cors', [
                'cors_max_age'              => 60,
                'cors_supports_credentials' => true,
            ])->assertStatus(200);

        $this->assertDatabaseHas('settings_cors', [
            'cors_max_age'              => 60,
            'cors_supports_credentials' => true,
        ]);

        $this->assertTrue(setting('cors.cors_supports_credentials'));
        $this->assertTrue(config('cors.supports_credentials'));
    }

    /** @test */
    public function a_list_setting_without_validation_rules_will_be_saved()
    {
        $paths = [
            ['_id' => 'a1', 'value' => 'api/*'],
            ['_id' => 'b2', 'value' => 'feeds/*'],
        ];

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/cors', [
                'cors_max_age' => 0,
                'cors_paths'   => $paths,
            ])->assertStatus(200);

        $this->assertEquals($paths, setting('cors.cors_paths'));
    }

    /** @test */
    public function a_list_setting_will_override_config_with_plain_values()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/cors', [
                'cors_max_age' => 0,
                'cors_paths'   => [
                    ['_id' => 'a1', 'value' => 'api/*'],
                    ['_id' => 'b2', 'value' => 'feeds/*'],
                ],
            ])->assertStatus(200);

        $this->assertSame(['api/*', 'feeds/*'], config('cors.paths'));

        // Overrides applied when settings are loaded on boot..
        config(['cors.paths' => []]);
        $this->app->forgetInstance('setting');
        (new SettingServiceProvider($this->app))->boot();

        $this->assertSame(['api/*', 'feeds/*'], config('cors.paths'));
    }

    /** @test */
    public function a_list_setting_default_will_override_config_unchanged()
    {
        $this->assertSame(['api/*'], setting('cors.cors_paths'));
        $this->assertSame(['api/*'], (new ListFieldtype())->getConfigValue(setting('cors.cors_paths')));
    }

    /** @test */
    public function optional_settings_left_out_of_the_request_keep_their_value()
    {
        setting(['cors.cors_supports_credentials' => true]);

        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/cors', [
                'cors_max_age' => 30,
            ])->assertStatus(200);

        $this->assertDatabaseHas('settings_cors', [
            'cors_max_age'              => 30,
            'cors_supports_credentials' => true,
        ]);
    }
}
