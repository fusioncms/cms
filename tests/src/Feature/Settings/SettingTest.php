<?php

namespace Fusion\Tests\Feature\Settings;

use Fusion\Facades\Setting;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SettingTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_setting_can_be_set_at_runtime()
    {
        $this->assertTrue(setting('system.website_title') === 'My FusionCMS Website');
        $this->assertTrue(setting('system.website_slogan') === 'Another awesome website powered by FusionCMS!');

        setting([
            'system.website_title'  => 'My New Website',
            'system.website_slogan' => 'An awesome website!',
        ]);

        $this->assertTrue(setting('system.website_title') === 'My New Website');
        $this->assertTrue(setting('system.website_slogan') === 'An awesome website!');
    }

    /** @test */
    public function a_malformed_setting_will_be_ignored()
    {
        setting(['system'  => [
            'website_title'  => 'My New Website',
            'website_slogan' => 'An awesome website!',
        ]]);

        $this->assertNull(setting('system'));
    }

    /** @test */
    public function a_non_existent_setting_will_be_ignored()
    {
        setting(['system.foo' => 'bar']);

        $this->assertNull(setting('system.foo'));
    }

    /** @test */
    public function a_request_for_setting_can_be_loaded_by_full_address()
    {
        $this->assertTrue(setting('mail.mail_default') === 'smtp');
        $this->assertTrue(setting('mail.mail_server') === 'server@example.com');
    }

    /** @test */
    public function a_request_for_settings_without_parameters_will_load_all_settings()
    {
        $settings = setting();

        $this->assertArrayHasKey('api.personal_access_tokens', $settings);
        $this->assertArrayHasKey('backups.backups_auto', $settings);
        $this->assertArrayHasKey('cache.clear_cache_component', $settings);
        $this->assertArrayHasKey('date_time.date_format', $settings);
    }

    /** @test */
    public function settings_facade_request_for_all_settings_will_load_all_settings()
    {
        $settings = Setting::all();

        $this->assertArrayHasKey('api.personal_access_tokens', $settings);
        $this->assertArrayHasKey('backups.backups_auto', $settings);
        $this->assertArrayHasKey('cache.clear_cache_component', $settings);
        $this->assertArrayHasKey('date_time.date_format', $settings);
    }

    /** @test */
    public function settings_facade_can_update_one_or_more_settings_at_runtime()
    {
        $this->assertTrue(Setting::get('system.website_title') === 'My FusionCMS Website');
        $this->assertTrue(Setting::get('system.website_slogan') === 'Another awesome website powered by FusionCMS!');

        Setting::set([
            'system.website_title'  => 'My New Website',
            'system.website_slogan' => 'An awesome website!',
        ]);

        $this->assertTrue(Setting::get('system.website_title') === 'My New Website');
        $this->assertTrue(Setting::get('system.website_slogan') === 'An awesome website!');
    }

    /** @test */
    public function settings_facade_can_handle_requests_for_setting_existence()
    {
        $this->assertTrue(Setting::has('system.website_title'));

        $this->assertFalse(Setting::has('system'));
        $this->assertFalse(Setting::has('system.foo'));
        $this->assertFalse(Setting::has('bar'));
        $this->assertFalse(Setting::has('bar.baz'));
    }

    // ---------------

    /** @test */
    public function settings_with_override_will_override_laravel_config_properties()
    {
        // update two `overridding` settings
        setting([
            'mail.mail_server' => 'admin@website.com',
            'mail.mail_name'   => 'FusionCMS Admin',
        ]);

        $this->assertEquals(config('mail.from.address'), 'admin@website.com');
        $this->assertEquals(config('mail.from.name'), 'FusionCMS Admin');
    }
}
