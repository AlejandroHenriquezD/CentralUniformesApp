<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diseño extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'img',
        'posicion',
        'tamaño',
        'favorito',
        'id_user',
        'id_logo',
        'id_articulo'
    ];

    public function logo()
    {
        return $this->belongsTo('App\Models\Logo', 'id_logo', 'id');
    }
    public function articulo()
    {
        return $this->belongsTo('App\Models\Articulo', 'id_articulo', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'id_user', 'id');
    }
    public function pedidos()
    {
        return $this->hasMany('App\Models\Pedido');
    }
}
