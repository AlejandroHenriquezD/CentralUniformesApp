<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'descripcion'];

    public function pedidos()
    {
        return $this->hasMany('App\Models\Pedido');
    }
}
