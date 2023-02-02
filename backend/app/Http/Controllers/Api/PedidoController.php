<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    
    public function index()
    {
        $pedidos = Pedido::all();
        return $pedidos;
    }

    public function store(Request $request)
    {
        $pedido = new Pedido();
        $pedido->fecha_pedido = $request->fecha_pedido;
        $pedido->id_cliente = $request->id_cliente;
        $pedido->id_empleado = $request->id_empleado;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;
        $pedido->id_trabajo = $request->id_trabajo;
        $pedido->id_diseño = $request->id_diseño;

        $pedido->save();
    }

    public function show($id)
    {
        $pedido = Pedido::find($id);
        return $pedido;
    }

    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->fecha_pedido = $request->fecha_pedido;
        $pedido->id_cliente = $request->id_cliente;
        $pedido->id_empleado = $request->id_empleado;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;
        $pedido->id_trabajo = $request->id_trabajo;
        $pedido->id_diseño = $request->id_diseño;

        $pedido->save();
        return $pedido;
    }

    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
