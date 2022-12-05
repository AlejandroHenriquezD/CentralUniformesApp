<?php

namespace Database\Factories;

use App\Models\Imagen;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{

    protected $model = Imagen::class;

    public function definition()
    {
        return [
            'imagen' => 'posts/' . $this->faker->imagen('public/storage/posts', 640, 480, null, false)
        ];
    }
}
