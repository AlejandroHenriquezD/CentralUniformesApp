<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestArticulo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerArticulos()
    {
        $this->get('http://localhost:8000/api/articulos')
            ->assertStatus(200);
    }
    public function testCrearArticulos()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->post('http://localhost:8000/api/articulo', ['nombre' => 'test', 'descripcion' => 'test', 'img' => 'test', 'precio' => 10, 'color' => 'test', 'talla' => 'test', 'stock' => 10]);

        $response->assertStatus(200);
    }
    public function testVerUnArticulo()
    {
        $response = $this->get('http://localhost:8000/api/articulo/0');

        $response->assertStatus(200);
    }
    public function testModificarArticulos()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->put('http://localhost:8000/api/articulo/1', ['nombre' => 'test', 'descripcion' => 'test', 'img' => 'test', 'precio' => 10, 'color' => 'test', 'talla' => 'test', 'stock' => 10]);

        $response->assertStatus(200);
    }
    public function testEliminarArticulos()
    {
        $response = $this->delete('http://localhost:8000/api/articulo/0');

        $response->assertStatus(200);
    }
}
