<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseños', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('img');
            $table->string('posicion')->nullable();
            $table->integer('tamaño')->nullable();
            $table->boolean('favorito')->nullable();
            $table->unsignedBigInteger('id_user')->nullable();
            $table->unsignedBigInteger('id_logo')->nullable();
            $table->unsignedBigInteger('id_articulo');

            $table->foreign('id_user')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('id_logo')
                ->references('id')
                ->on('logos')
                ->onDelete('cascade');

            $table->foreign('id_articulo')
                ->references('id')
                ->on('articulos')
                ->onDelete('cascade');

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
        Schema::dropIfExists('diseños');
    }
};
