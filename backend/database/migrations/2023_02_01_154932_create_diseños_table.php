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
            $table->string('name');
            $table->string('img');
            $table->string('position');
            $table->integer('size');
            $table->boolean('favourite');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('logo_id')->nullable();
            $table->unsignedBigInteger('articulo_id');

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade');

            $table->foreign('logo_id')
                ->references('id')
                ->on('logos')
                ->onDelete('cascade');
            
            $table->foreign('articulo_id')
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
