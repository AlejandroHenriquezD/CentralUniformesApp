<?php

namespace Tests\Feature;

use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\User;

class TestLogo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerLogos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $this->json('GET', '/api/logos')
            ->assertStatus(200);
    }
    public function testCrearLogos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('POST', '/api/logo', ['nombre' => 'test', 'img' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testVerUnLogo()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('GET', '/api/logo/0');

        $response->assertStatus(200);
    }
    public function testModificarLogos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->json('PUT', '/api/logo/1', ['nombre' => 'test', 'img' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testEliminarLogos()
    {
        Sanctum::actingAs(
            User::factory()->create()
        );
        $response = $this->json('DELETE', '/api/logo/0');

        $response->assertStatus(200);
    }
}
