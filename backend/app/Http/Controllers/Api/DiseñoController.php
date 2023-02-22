<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Diseño;
use Illuminate\Http\Request;

class DiseñoController extends Controller
{
    public function index()
    {
        $design = Diseño::all();
        return $design;
    }

    public function showByUserId($id)
    {
        $designs = Diseño::where('id_user', $id)->get();
        return $designs;
    }

    public function countByUserId($id)
    {
        return $this->showByUserId($id)->count();
        // return $counter;
    }

    public function store(Request $request)
    {
        $design = new Diseño();

        $design->nombre = $request->nombre;
        $design->posicion = $request->posicion;
        $design->tamaño = $request->tamaño;
        $design->favorito = $request->favorito;
        $design->id_logo = $request->id_logo;
        $design->id_articulo = $request->id_articulo;
        $design->id_user = $request->id_user;

        $design->save();
    }

    public function show($id)
    {
        $design = Diseño::find($id);
        return $design;
    }

    // public function showUser($id)
    // {
    //     $design = design::find($id);
    //     return $design;
    // }

    public function update(Request $request, $id)
    {
        $design = Diseño::findOrFail($request->id);
        $design->nombre = $request->nombre;
        $design->posicion = $request->posicion;
        $design->tamaño = $request->tamaño;
        $design->favorito = $request->favorito;
        $design->id_logo = $request->id_logo;
        $design->id_articulo = $request->id_articulo;
        $design->id_user = $request->id_user;

        $design->save();
    }

    public function destroy($id)
    {
        $design = Diseño::destroy($id);
        return $design;
    }
}
