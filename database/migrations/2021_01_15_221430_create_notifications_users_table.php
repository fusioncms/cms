<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications_users', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('channel_id');
            $table->unsignedBigInteger('notification_id');

            $table->unique([
                'user_id',
                'channel_id',
                'notification_id'
            ], 'pivot_unique');

            $table->foreign('user_id')
                ->references('id')->on('users')
                ->onDelete('cascade');

            $table->foreign('channel_id')
                ->references('id')->on('channels')
                ->onDelete('cascade');

            $table->foreign('notification_id')
                ->references('id')->on('notifications')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications_users');
    }
}
