<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fields', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->morphs('fieldable');
            $table->string('name');
            $table->string('handle');
            $table->text('help')->nullable();
            $table->string('type');
            $table->text('validation')->nullable();
            $table->text('settings')->nullable();
            $table->integer('order')->default(0);
            $table->boolean('locked')->default(false);
            $table->timestamps();

            $table->unique([
                'fieldable_id',
                'fieldable_type',
                'handle'
            ]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fields');
    }
}
