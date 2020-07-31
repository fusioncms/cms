<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReplicatorsPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('replicators_pivot', function (Blueprint $table) {
            $table->unsignedBigInteger('replicant_id');
            $table->unsignedBigInteger('section_id');
            $table->morphs('pivot');
            $table->unsignedInteger('order')->default(0);

            $table->foreign('section_id')
                ->references('id')->on('sections')
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
        Schema::dropIfExists('replicators_pivot');
    }
}
