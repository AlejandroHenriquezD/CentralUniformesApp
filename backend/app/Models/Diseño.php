<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diseño extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'img',
        'position',
        'size',
        'favourite',
        'user_id',
        'logo_id',
        'articulo_id'
    ];

    public function logo()
    {
        return $this->belongsTo('App\Models\Logo', 'logo_id', 'id');
    }
    public function articulo()
    {
        return $this->belongsTo('App\Models\Articulo', 'articulo_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }
    public function pedidos()
    {
        return $this->hasMany('App\Models\Pedido');
    }
}
