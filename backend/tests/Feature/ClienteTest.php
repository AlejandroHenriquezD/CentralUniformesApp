<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestCliente extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerClientes()
    {
        $this->get('http://localhost:8000/api/clientes')
            ->assertStatus(200);
    }
    public function testCrearClientes()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->post('http://localhost:8000/api/cliente', ['provincia' => 'test', 'codigo_postal' => 'test', 'municipio' => 'test', 'direccion' => 'test', 'telefono' => 'test', 'observaciones' => '', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testVerUnCliente()
    {
        $response = $this->get('http://localhost:8000/api/cliente/0');

        $response->assertStatus(200);
    }
    public function testModificarClientes()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->put('http://localhost:8000/api/cliente/1', ['provincia' => 'test', 'codigo_postal' => 'test', 'municipio' => 'test', 'direccion' => 'test', 'telefono' => 'test', 'observaciones' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testEliminarClientes()
    {
        $response = $this->delete('http://localhost:8000/api/cliente/0');

        $response->assertStatus(200);
    }
}
