<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('status')->default(true);
            $table->integer('invalid_logins')->unsigned()->default(0);
            $table->dateTime('logged_in_at')->nullable();
            $table->dateTime('invalidly_logged_in_at')->nullable();
            $table->dateTime('password_changed_at')->nullable();
            $table->dateTime('password_expires_at')->nullable();
            $table->timestamp('welcomed_at')->nullable();
        });
    }

    /**
     * Reverse the migration.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'status',
                'invalid_logins',
                'invalidly_logged_in_at',
                'password_changed_at',
                'password_expires_at',
                'email_verified_at',
                'welcomed_at',
            ]);
        });
    }
}
