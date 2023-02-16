<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Trabajo;
use Illuminate\Http\Request;

class TrabajoController extends Controller
{
    public function index()
    {
        $trabajo = Trabajo::all();
        return $trabajo;
    }

    public function store(Request $request)
    {
        $trabajo = new Trabajo();
        $trabajo->nombre = $request->nombre;
        $trabajo->descripcion = $request->descripcion;

        $trabajo->save();
    }
    public function show($id)
    {
        $trabajo = Trabajo::find($id);
        return $trabajo;
    }
    public function update(Request $request, $id)
    {
        $trabajo = Trabajo::findOrFail($request->id);
        $trabajo->nombre = $request->nombre;
        $trabajo->descripcion = $request->descripcion;

        $trabajo->save();
        return $trabajo;
    }
    public function destroy($id)
    {
        $trabajo = Trabajo::destroy($id);
        return $trabajo;
    }
}
