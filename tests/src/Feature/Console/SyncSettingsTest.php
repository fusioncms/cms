<?php

namespace Fusion\Tests\Feature;

use Fusion\Console\Actions\SyncSettings;
use Fusion\Models\Setting as SettingGroup;
use Fusion\Services\Setting as SettingService;
use Fusion\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SyncSettingsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group settings
     */
    public function console_command_will_sync_setting_group_records()
    {
        $groups = SettingService::groups();

        // add group..
        $groups['foobar'] = [
            'name'        => 'Foobar',
            'handle'      => 'foobar',
            'group'       => 'General',
            'icon'        => 'fake',
            'description' => 'Test setting group.',
        ];

        // modify existing group..
        $groups['backups'] = [
            'name'        => 'Baz',
            'handle'      => 'baz',
            'group'       => 'Services',
            'icon'        => 'save',
            'description' => 'Configure backup schedule and cleanup strategy settings.',
        ];

        // remove existing setting group..
        unset($groups['api']);

        // run test..
        (new SyncSettings())->syncSettingGroups($groups);

        // test removal..
        $this->assertDatabaseMissing('settings', ['handle' => 'api']);
        $this->assertDatabaseMissing('fieldsets', ['handle' => 'api']);
        $this->assertDatabaseDoesNotHaveTable('settings_api');

        // test modification..
        $this->assertDatabaseMissing('settings', ['handle' => 'backups']);
        $this->assertDatabaseMissing('fieldsets', ['handle' => 'backups']);
        $this->assertDatabaseDoesNotHaveTable('settings_backups');
        $this->assertDatabaseHas('settings', ['handle' => 'baz']);
        $this->assertDatabaseHas('fieldsets', ['handle' => 'setting_baz']);
        $this->assertDatabaseHasTable('settings_baz');

        // test addition..
        $this->assertDatabaseHas('settings', ['handle' => 'foobar']);
        $this->assertDatabaseHas('fieldsets', ['handle' => 'setting_foobar']);
        $this->assertDatabaseHasTable('settings_foobar');
    }

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group settings
     */
    public function console_command_will_sync_setting_section_records()
    {
        $group    = SettingGroup::where('handle', 'api')->firstOrFail();
        $fieldset = $group->fieldset();
        $fields   = SettingService::fields($group->handle);

        // add group..
        $fields['FooBar'] = [];

        // remove existing section..
        unset($fields['General']);

        // run test
        (new SyncSettings())->syncSettingSection($group, $fields);

        // test removal..
        $this->assertDatabaseMissing('sections', [
            'fieldset_id' => $fieldset->id,
            'handle'      => 'general',
        ]);

        // test addition..
        $this->assertDatabaseHas('sections', [
            'fieldset_id' => $fieldset->id,
            'handle'      => 'foobar',
        ]);
    }

    /**
     * @test
     * @group fusioncms
     * @group console
     * @group settings
     */
    public function console_command_will_sync_setting_field_records()
    {
        $group   = SettingGroup::where('handle', 'files')->firstOrFail();
        $section = $group->fieldset()->sections->first();
        $fields  = SettingService::fields($group->handle);
        $fields  = $fields->get('General');

        // remove existing field..
        array_shift($fields);

        // modify existing group..
        $fields[0] = [
            'name'   => 'Baz',
            'handle' => 'baz',
        ];

        // add field..
        array_push($fields, [
            'name'        => 'Foobar',
            'handle'      => 'foobar',
            'description' => 'Fake field.',
            'type'        => 'list',
            'default'     => ['pdf', 'docx'],
        ]);

        // run test
        (new SyncSettings())->syncSettingFields($section, $fields);

        // test removal..
        $this->assertDatabaseMissing('fields', [
            'section_id' => $section->id,
            'name'       => 'Accepted File Types',
            'handle'     => 'accepted_files',
        ]);

        // test modification..
        $this->assertDatabaseHas('fields', [
            'section_id' => $section->id,
            'name'       => 'Baz',
            'handle'     => 'baz',
        ]);

        // test addition..
        $this->assertDatabaseHas('fields', [
            'section_id' => $section->id,
            'name'       => 'Foobar',
            'handle'     => 'foobar',
        ]);
    }
}
