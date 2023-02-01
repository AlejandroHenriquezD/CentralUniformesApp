<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;
    protected $fillable = ['id_articulo', 'imagen'];

    protected $with = 'articulo';

    public function articulo(){
        return $this->belongsTo('App\Models\Articulo', 'id_articulo', 'id');
    }
}