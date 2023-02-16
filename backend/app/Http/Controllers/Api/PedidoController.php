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
        $pedido->fecha_pedido = base64_decode($request->fecha_pedido);
        $pedido->id_cliente = base64_decode($request->id_cliente);
        $pedido->id_empleado = base64_decode(1);
        $pedido->unidades = base64_decode($request->unidades);
        $pedido->observaciones = base64_decode($request->observaciones);
        $pedido->id_trabajo = base64_decode($request->id_trabajo);
        $pedido->id_diseño = base64_decode($request->id_diseño);

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
        $pedido->fecha_pedido = base64_decode($request->fecha_pedido);
        $pedido->id_cliente = base64_decode($request->id_cliente);
        $pedido->id_empleado = base64_decode($request->id_empleado);
        $pedido->unidades = base64_decode($request->unidades);
        $pedido->observaciones = base64_decode($request->observaciones);
        $pedido->id_trabajo = base64_decode($request->id_trabajo);
        $pedido->id_diseño = base64_decode($request->id_diseño);

        $pedido->save();
        return $pedido;
    }

    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
