<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuneaksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guneaks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('izena');
            $table->float('latitud');
            $table->float('longitud');
            $table->string('deskripzioa');
            $table->string('irudia');
            $table->string('audio');
            $table->string('bideo');
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
        Schema::dropIfExists('guneaks');
    }
}
