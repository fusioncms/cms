<?php

namespace Fusion\Tests\Feature\Settings;

use Fusion\Tests\TestCase;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BackupTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->handleValidationExceptions();
    }

    /** @test */
    public function a_user_with_permissions_can_update_backup_settings()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/backups', [
                'backups_auto' => 'enabled',
                'disks'        => ['public'],
            ])->assertStatus(200);
    }

    /** @test */
    public function a_user_without_permissions_can_not_update_backup_settings()
    {
        $this->expectException(AuthenticationException::class);

        $this
            ->json('PATCH', 'api/settings/backups', [])
            ->assertStatus(422);
    }

    /** @test */
    public function updates_to_backup_setting_will_override_some_config_values()
    {
        $this
            ->be($this->owner, 'api')
            ->json('PATCH', 'api/settings/backups', [
                'backups_auto'                    => 'enabled',
                'keep_all_backups_for_days'       => 3,
                'keep_daily_backups_for_days'     => 7,
                'keep_weekly_backups_for_weeks'   => 2,
                'keep_monthly_backups_for_months' => 1,
                'keep_yearly_backups_for_years'   => 1,
            ]);

        $this->assertEquals(config('backup.cleanup.default_strategy.keep_all_backups_for_days'), 3);
        $this->assertEquals(config('backup.cleanup.default_strategy.keep_daily_backups_for_days'), 7);
        $this->assertEquals(config('backup.cleanup.default_strategy.keep_weekly_backups_for_weeks'), 2);
        $this->assertEquals(config('backup.cleanup.default_strategy.keep_monthly_backups_for_months'), 1);
        $this->assertEquals(config('backup.cleanup.default_strategy.keep_yearly_backups_for_years'), 1);
    }
}
