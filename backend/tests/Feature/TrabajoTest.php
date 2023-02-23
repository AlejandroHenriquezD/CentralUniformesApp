<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestTrabajo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerTrabajos()
    {
        $this->get('http://localhost:8000/api/trabajos')
            ->assertStatus(200);
    }
    public function testCrearTrabajos()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->post('http://localhost:8000/api/trabajo', ['nombre' => 'test', 'descripcion' => 'test']);

        $response->assertStatus(200);
    }
    public function testVerUnTrabajo()
    {
        $response = $this->get('http://localhost:8000/api/trabajo/0');

        $response->assertStatus(200);
    }
    // public function testModificarTrabajos()
    // {
    //     $response = $this->withHeaders([
    //         'X-Header' => 'Value',
    //     ])->put('http://localhost:8000/api/trabajo/1', ['nombre' => 'test', 'descripcion' => 'test']);

    //     $response->assertStatus(200);
    // }
    public function testEliminarTrabajos()
    {
        $response = $this->delete('http://localhost:8000/api/trabajo/0');

        $response->assertStatus(200);
    }
}
