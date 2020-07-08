<?php

namespace Fusion\Tests\Unit;

use Fusion\Models\Setting;
use Fusion\Tests\TestCase;
use Fusion\Models\SettingSection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Testing\RefreshDatabase;

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
    public function a_setting_belongs_to_a_setting_section()
    {
    	$this->assertInstanceOf(SettingSection::class, Setting::first()->section);
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function a_setting_section_has_many_settings()
    {
        $this->assertInstanceOf(Collection::class, SettingSection::first()->settings);
        $this->assertInstanceOf(Setting::class, SettingSection::first()->settings->first());
    }

    /**
     * @test
     * @group unit
     * @group settings
     */
    public function settings_will_be_imported_to_the_database_upon_install()
    {
        $this->assertDatabaseHas('setting_sections', ['name' => 'System']);

        $this->assertDatabaseHas('settings', ['name' => 'Theme', 'value' => 'Hello']);
        $this->assertDatabaseHas('settings', ['name' => 'Website Title', 'value' => 'My FusionCMS Website']);
    }
}