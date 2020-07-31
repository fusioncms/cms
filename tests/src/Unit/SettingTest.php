<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Fieldset;
use Fusion\Models\Setting;
use Fusion\Tests\TestCase;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

class SettingTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function each_setting_must_have_a_unique_handle()
    {
        $this->expectException(QueryException::class);
        $this->expectExceptionMessage('UNIQUE constraint failed: settings.handle');

        $attributes = collect(DB::table('settings')->first())->toArray();
        $attributes['id'] = null;

        DB::table('settings')->insert($attributes);
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function each_setting_group_will_have_one_fieldset()
    {
        $this->assertInstanceOf(Fieldset::class, Setting::first()->fieldset);
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function each_setting_group_will_have_one_settings_builder_class()
    {
        $this->assertInstanceOf('Fusion\Models\Settings\Api', Setting::first()->getBuilder());
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function each_settings_builder_will_link_back_to_its_group()
    {
        $group = Setting::first();
        $setting = $group->getBuilder()->firstOrCreate(['id' => 1, 'setting_id' => $group->id]);

        $this->assertInstanceOf(Setting::class, $setting->group);
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function settings_will_be_imported_to_the_database_upon_install()
    {
        $this->assertDatabaseHas('settings', ['name' => 'API']);
        $this->assertDatabaseHas('settings', ['name' => 'System']);

        $this->assertDatabaseHasTable('settings_api');
        $this->assertDatabaseHasTable('settings_system');
    }
}
