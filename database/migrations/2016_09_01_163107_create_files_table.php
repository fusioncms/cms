<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('directory_id')->nullable();
            $table->string('name');
            $table->string('uuid')->unique();
            $table->string('title')->nullable();
            $table->string('alt')->nullable();
            $table->text('caption')->nullable();
            $table->string('location');
            $table->string('extension');
            $table->string('mimetype');
            $table->integer('bytes');
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
