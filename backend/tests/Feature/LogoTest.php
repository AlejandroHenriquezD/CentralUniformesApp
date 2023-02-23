<?php

namespace Tests\Feature;

use Tests\TestCase;

class TestLogo extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testVerLogos()
    {
        $this->get('http://localhost:8000/api/logos')
            ->assertStatus(200);
    }
    public function testCrearLogos()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->post('http://localhost:8000/api/logo', ['nombre' => 'test', 'img' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testVerUnLogo()
    {
        $response = $this->get('http://localhost:8000/api/logo/0');

        $response->assertStatus(200);
    }
    public function testModificarLogos()
    {
        $response = $this->withHeaders([
            'X-Header' => 'Value',
        ])->put('http://localhost:8000/api/logo/1', ['nombre' => 'test', 'img' => 'test', 'id_user' => 1]);

        $response->assertStatus(200);
    }
    public function testEliminarLogos()
    {
        $response = $this->delete('http://localhost:8000/api/logo/0');

        $response->assertStatus(200);
    }
}
