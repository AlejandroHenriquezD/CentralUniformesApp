<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    public function index()
    {
        $clientes = Cliente::all();
        return $clientes;
    }


    public function store(Request $request)
    {
        $cliente = new Cliente();
        $cliente->telefono = base64_decode($request->telefono);
        $cliente->direccion = base64_decode($request->direccion);
        $cliente->codigo_postal = base64_decode($request->codigo_postal);
        $cliente->municipio = base64_decode($request->municipio);
        $cliente->provincia = base64_decode($request->provincia);
        $cliente->observaciones = base64_decode($request->observaciones);
        $cliente->id_user = base64_decode($request->id_user);

        $cliente->save();
    }

    
    public function show($id)
    {
        $cliente = Cliente::find($id);
        return $cliente;
    }


    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($id);
        $cliente->telefono = base64_decode($request->telefono);
        $cliente->direccion = base64_decode($request->direccion);
        $cliente->codigo_postal = base64_decode($request->codigo_postal);
        $cliente->municipio = base64_decode($request->municipio);
        $cliente->provincia = base64_decode($request->provincia);
        $cliente->observaciones = base64_decode($request->observaciones);
        $cliente->id_user = base64_decode($request->id_user);

        $cliente->save();
        return $cliente;
    }

    
    public function destroy($id)
    {
        $cliente = Cliente::destroy($id);
        return $cliente;
    }
}
