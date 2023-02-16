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

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/diseñoTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $design->img = $destinationPath . $filename;
        }

        $design->nombre = base64_decode($request->nombre);
        $design->posicion = base64_decode($request->posicion);
        $design->tamaño = base64_decode($request->tamaño);
        $design->favorito = base64_decode($request->favorito);
        $design->id_logo = base64_decode($request->id_logo);
        $design->id_articulo = base64_decode($request->id_articulo);
        $design->id_user = base64_decode($request->id_user);
        $design->img = base64_decode($request->img);

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
        $design->nombre = base64_decode($request->nombre);
        $design->posicion = base64_decode($request->posicion);
        $design->tamaño = base64_decode($request->tamaño);
        $design->favorito = base64_decode($request->favorito);
        $design->id_logo = base64_decode($request->id_logo);
        $design->id_articulo = base64_decode($request->id_articulo);
        $design->id_user = base64_decode($request->id_user);
        $design->img = base64_decode($request->img);

        $design->save();
    }

    public function destroy($id)
    {
        $design = Diseño::destroy($id);
        return $design;
    }
}
