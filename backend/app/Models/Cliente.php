<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Cliente extends Model
{


    use HasApiTokens, HasFactory, Notifiable;
    protected $fillable = ['usuario', 'contraseña', 'cif_nif', 'razon_social', 'nombre_comercial', 'telefono', 'email', 'direccion', 'codigo_postal', 'municipio', 'provincia', 'observaciones'];
    
}
