<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('trabajos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('descripcion');
            $table->timestamps();
        });
        DB::table("trabajos")
            ->insert([
                "nombre" => "Coser",
                "descripcion" => "Coser",
            ]);
        DB::table("trabajos")
            ->insert([
                "nombre" => "Planchar",
                "descripcion" => "Planchar",
            ]);
        DB::table("trabajos")
            ->insert([
                "nombre" => "Tejer",
                "descripcion" => "Tejer",
            ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trabajos');
    }
};
