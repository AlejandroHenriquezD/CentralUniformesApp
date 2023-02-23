<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\User;

class TestTrabajo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerTrabajos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $this->json('GET', '/api/trabajos')
            ->assertStatus(200);
    }
    public function testCrearTrabajos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('POST', '/api/trabajo', ['nombre' => 'test', 'descripcion' => 'test']);

        $response->assertStatus(200);
    }
    public function testVerUnTrabajo()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('GET', '/api/trabajo/0', ['id' => 0]);

        $response->assertStatus(200);
    }
    public function testEliminarTrabajos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('DELETE', '/api/trabajo/0');

        $response->assertStatus(200);
    }
}
