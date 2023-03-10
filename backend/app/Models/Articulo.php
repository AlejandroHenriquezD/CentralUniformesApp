<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'descripcion', 'img', 'precio', 'color', 'talla', 'stock'];

    public function diseño()
    {
        return $this->hasMany('App\Models\Diseño');
    }
}
