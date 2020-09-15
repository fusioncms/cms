<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sections', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('blueprint_id');
            $table->string('name');
            $table->string('handle');
            $table->string('description')->nullable();
            $table->string('placement')->default('body');
            $table->unsignedInteger('order')->default(0);
            $table->timestamps();

            $table->unique(['blueprint_id', 'handle']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sections');
    }
}
