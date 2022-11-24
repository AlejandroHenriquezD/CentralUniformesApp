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
        $pedido->id_pedido = $request->id_pedido;
        $pedido->id_cliente = $request->id_cliente;
        $pedido->id_articulo = $request->id_articulo;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;

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
        $pedido->id_pedido = $request->id_pedido;
        $pedido->id_cliente = $request->id_cliente;
        $pedido->id_articulo = $request->id_articulo;
        $pedido->unidades = $request->unidades;
        $pedido->observaciones = $request->observaciones;

        $pedido->save();
        return $pedido;
    }

    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
