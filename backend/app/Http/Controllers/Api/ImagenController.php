<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Imagen;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\ImageStoreRequest;

class ImagenController extends Controller
{

    public function index()
    {
        $imagenes = Imagen::all();
        return $imagenes;
    }

    public function store(Request $request)
    {

        if ($request->hasFile('imagen')) {
            $file = $request->file('imagen');
            $filename = $file->getClientOriginalName();
            $finalName = date('His') . $filename;
            $request->file('imagen')->storeAs('images/', $finalName, 'public');

            $imagen = new Imagen();
            $imagen->id_articulo = $request->id_articulo;
            $imagen->imagen = $request->file('images/', '/' . $finalName, 'public');
            $imagen->save();
            
            return response()->json(["message" => "Exito"]);
        } else {
            return response()->json(["message" => "F"]);
        }




        // $validatedData = $request->validated();
        // $validatedData['image'] = $request->file('image')->store('image');
        // $data = Imagen::create($validatedData);

        // return response($data, Response::HTTP_CREATED);

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
