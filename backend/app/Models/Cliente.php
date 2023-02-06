<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Cliente extends Model
{


    use HasFactory;
    protected $fillable = ['provincia', 'codigo_postal', 'municipio', 'direccion', 'telefono', 'observaciones', 'id_user'];

    protected $with = 'usuario';

    public function usuario()
    {
        return $this->belongsTo('App\Models\User', 'id_user', 'id');
    }
}
