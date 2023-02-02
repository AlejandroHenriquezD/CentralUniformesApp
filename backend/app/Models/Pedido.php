<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $fillable = ['fecha_pedido', 'observaciones', 'unidades', 'cliente_id', 'empleado_id', 'trabajo_id', 'diseño_id'];

    protected $with = 'articulo';
    
    public function trabajo()
    {
        return $this->belongsTo('App\Models\Trabajo', 'trabajo_id', 'id');
    }

    public function diseño()
    {
        return $this->belongsTo('App\Models\Diseño', 'diseño_id', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo('App\Models\User', 'cliente_id', 'id');
    }

    public function empleado()
    {
        return $this->belongsTo('App\Models\User', 'empleado_id', 'id');
    }
}
