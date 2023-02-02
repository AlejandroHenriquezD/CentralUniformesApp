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
        $cliente->telefono = $request->telefono;
        $cliente->direccion = $request->direccion;
        $cliente->codigo_postal = $request->codigo_postal;
        $cliente->municipio = $request->municipio;
        $cliente->provincia = $request->provincia;
        $cliente->observaciones = $request->observaciones;
        $cliente->id_user = $request->id_user;

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
        $cliente->telefono = $request->telefono;
        $cliente->direccion = $request->direccion;
        $cliente->codigo_postal = $request->codigo_postal;
        $cliente->municipio = $request->municipio;
        $cliente->provincia = $request->provincia;
        $cliente->observaciones = $request->observaciones;
        $cliente->id_user = $request->id_user;

        $cliente->save();
        return $cliente;
    }

    
    public function destroy($id)
    {
        $cliente = Cliente::destroy($id);
        return $cliente;
    }
}
