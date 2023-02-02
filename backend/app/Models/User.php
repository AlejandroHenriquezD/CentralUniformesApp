<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// sanctum
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'dni',
        'name',
        'password',
        'email',
        'rol'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function cliente_pedido()
    {
        return $this->hasMany('App\Models\Pedido');
    }

    public function empleado_pedido()
    {
        return $this->hasMany('App\Models\Pedido');
    }

    public function diseños()
    {
        return $this->hasMany('App\Models\Diseño');
    }

    public function logos()
    {
        return $this->hasMany('App\Models\Logo');
    }

    public function rol()
    {
        return $this->hasOne('App\Models\Cliente');
    }
}
