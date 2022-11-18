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
            $table->string('cif_nif');
            $table->string('razon_social')->nullable();
            $table->string('nombre_comercial')->nullable();
            $table->string('telefono');
            $table->string('email')->nullable();
            $table->string('direccion');
            $table->string('codigo_postal');
            $table->string('municipio');
            $table->string('provincia');
            $table->string('observaciones')->nullable();
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
