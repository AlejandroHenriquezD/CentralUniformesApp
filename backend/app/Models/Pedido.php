<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $fillable = ['fecha_pedido', 'observaciones', 'unidades', 'id_cliente', 'id_empleado', 'id_trabajo', 'id_diseño'];

    protected $with = 'articulo';
    
    public function trabajo()
    {
        return $this->belongsTo('App\Models\Trabajo', 'id_trabajo', 'id');
    }

    public function diseño()
    {
        return $this->belongsTo('App\Models\Diseño', 'id_diseño', 'id');
    }

    public function cliente()
    {
        return $this->belongsTo('App\Models\User', 'id_cliente', 'id');
    }

    public function empleado()
    {
        return $this->belongsTo('App\Models\User', 'id_empleado', 'id');
    }
}
