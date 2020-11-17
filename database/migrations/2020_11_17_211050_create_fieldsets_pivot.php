<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFieldsetsPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fieldsets_pivot', function (Blueprint $table) {
            $table->unsignedBigInteger('fieldset_id');
            $table->unsignedBigInteger('field_id');
            $table->morphs('pivot');
            $table->timestamps();

            $table->foreign('field_id')
                ->references('id')->on('fields')
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
        Schema::dropIfExists('fieldsets_pivot');
    }
}
