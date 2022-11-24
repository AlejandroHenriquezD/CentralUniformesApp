<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Imagen;
use Illuminate\Http\Request;

class ImagenController extends Controller
{

    public function index()
    {
        $imagenes = Imagen::all();
        return $imagenes;
    }
    
    public function store(Request $request)
    {
        $imagen = new Imagen();
        $imagen->id_articulo = $request->id_articulo;
        $imagen->imagen = $request->imagen;

        $imagen->save();
    }

    public function show($id)
    {
        $imagen = Imagen::find($id);
        return $imagen;
    }

    public function update(Request $request, $id)
    {
        $imagen = Imagen::findOrFail($id);
        $imagen->id_articulo = $request->id_articulo;
        $imagen->imagen = $request->imagen;

        $imagen->save();
        return $imagen;
    }

    public function destroy($id)
    {
        $imagen = Imagen::destroy($id);
        return $imagen;
    }
}
