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
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_pedido');
            $table->foreign('id_pedido')
                ->references('id')
                ->on('pedidos')
                ->onDelete('cascade');
            $table->unsignedBigInteger('id_empleado');
            $table->foreign('id_empleado')
                ->references('id')
                ->on('empleados')
                ->onDelete('cascade');
            $table->unsignedBigInteger('tipo_trabajo');
            $table->foreign('tipo_trabajo')
                ->references('id')
                ->on('tipos_trabajo')
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
        Schema::dropIfExists('tareas');
    }
};
