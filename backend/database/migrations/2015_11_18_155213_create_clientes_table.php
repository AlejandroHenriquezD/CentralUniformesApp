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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('id_user');
            $table->foreign('id_user')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->string('telefono');
            $table->string('direccion');
            $table->string('codigo_postal');
            $table->string('municipio');
            $table->string('provincia');
            $table->string('observaciones')->nullable();
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
        Schema::dropIfExists('clientes');
    }
};
