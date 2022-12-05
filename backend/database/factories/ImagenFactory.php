<?php

namespace Database\Factories;

use App\Models\Imagen;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImagenFactory extends Factory
{

    protected $model = Imagen::class;

    public function definition()
    {
        return [
            'image' => 'posts/' . $this->faker->image('public/storage/posts', 640, 480, null, false)
        ];
    }
}
