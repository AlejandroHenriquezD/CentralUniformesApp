<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $fillable = ['id_pedido', 'id_cliente', 'id_articulo', 'unidades', 'observaciones'];

    protected $with = 'articulo';

    public function articulo(){
        return $this->belongsTo('App\Models\Articulo', 'id_articulo', 'id');
    }
}
