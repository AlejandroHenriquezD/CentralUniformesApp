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
        $pedido->cliente_id = $request->cliente_id;
        $pedido->empleado_id = $request->empleado_id;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;
        $pedido->trabajo_id = $request->trabajo_id;
        $pedido->diseño_id = $request->diseño_id;

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
        $pedido->cliente_id = $request->cliente_id;
        $pedido->empleado_id = $request->empleado_id;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;
        $pedido->trabajo_id = $request->trabajo_id;
        $pedido->diseño_id = $request->diseño_id;

        $pedido->save();
        return $pedido;
    }

    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
