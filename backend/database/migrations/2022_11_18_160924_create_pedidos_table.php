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
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('id_cliente');
            $table->foreign('id_cliente')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_empleado')->nullable();
            $table->foreign('id_empleado')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
            
            $table->unsignedBigInteger('id_diseño');
            $table->foreign('id_diseño')
                ->references('id')
                ->on('diseños')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_trabajo');
            $table->foreign('id_trabajo')
                ->references('id')
                ->on('trabajos')
                ->onDelete('cascade');

            $table->integer('unidades');
            $table->string('observaciones')->nullable();
            $table->timestamp('fecha_pedido');
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
        Schema::dropIfExists('pedidos');
    }
};
