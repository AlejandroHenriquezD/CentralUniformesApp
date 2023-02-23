<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\User;

class TestCliente extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerClientes()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $this->json('GET', '/api/clientes')
            ->assertStatus(200);
    }
    public function testCrearClientes()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('POST', '/api/cliente', ['provincia' => 'test', 'codigo_postal' => 'test', 'municipio' => 'test', 'direccion' => 'test', 'telefono' => 'test', 'observaciones' => '', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testVerUnCliente()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('GET', '/api/cliente/0');

        $response->assertStatus(200);
    }
    public function testModificarClientes()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('PUT', '/api/cliente/1', ['provincia' => 'test', 'codigo_postal' => 'test', 'municipio' => 'test', 'direccion' => 'test', 'telefono' => 'test', 'observaciones' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testEliminarClientes()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('DELETE', '/api/cliente/0');

        $response->assertStatus(200);
    }
}
