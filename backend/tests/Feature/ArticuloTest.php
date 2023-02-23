<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\User;

class TestArticulo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerArticulos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('GET', '/api/articulos');
        $response->assertStatus(200);
    }
    public function testCrearArticulos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('POST', '/api/articulo', ['nombre' => 'test', 'descripcion' => 'test', 'img' => 'test', 'precio' => 10, 'color' => 'test', 'talla' => 'test', 'stock' => 10]);

        $response->assertStatus(200);
    }
    public function testVerUnArticulo()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('GET', '/api/articulo/0');

        $response->assertStatus(200);
    }
    public function testModificarArticulos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('PUT', '/api/articulo/1', ['nombre' => 'test', 'descripcion' => 'test', 'img' => 'test', 'precio' => 10, 'color' => 'test', 'talla' => 'test', 'stock' => 10]);

        $response->assertStatus(200);
    }
    public function testEliminarArticulos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('DELETE', '/api/articulo/0');

        $response->assertStatus(200);
    }
}
