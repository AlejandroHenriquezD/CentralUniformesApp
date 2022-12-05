<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'talla', 'color', 'precio', 'stock', 'descripcion'];
    
    public function imagen(){
        return $this->hasMany('App\Models\Imagen', 'id_articulo');
    }
    public function pedido(){
        return $this->hasMany('App\Models\Pedido', 'id_articulo');
    }
}   
