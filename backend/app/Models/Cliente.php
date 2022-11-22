<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $fillable = ['usuario', 'contraseña', 'cif_nif', 'razon_social', 'nombre_comercial', 'telefono', 'email', 'direccion', 'codigo_postal', 'municipio', 'provincia', 'observaciones'];
}
