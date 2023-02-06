<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Articulo;
use Illuminate\Http\Request;

class ArticuloController extends Controller
{
    // public function count()
    // {
    //     $count = DB::table('articulos')->count();
    //     return $count;
    // }

    // public function indexPdf()
    // {
    //     $articulos = Articulo::all();

    //     $data = ['articulos'=>$articulos];
    //     return response()->json($data,200, []);

    //     // $articulos = DB::table('articulos')->get();
    //     // $pdf = PDF::loadview('articulos',['articulos'=> $articulos]);
    //     // return $pdf->stream();
    // }

    public function index()
    {
        $articulos = Articulo::all();
        return $articulos;
    }

    public function store(Request $request)
    {
        $articulo = new Articulo();
        $articulo->nombre = $request->nombre;
        $articulo->talla = $request->talla;
        $articulo->color = $request->color;
        $articulo->precio = $request->precio;
        $articulo->stock = $request->stock;
        $articulo->descripcion = $request->descripcion;

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/logosTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $articulo->img = $destinationPath . $filename;
        }


        $articulo->save();
    }

    public function show($id)
    {
        $articulo = Articulo::find($id);
        return $articulo;
    }

    public function update(Request $request, $id)
    {
        $articulo = Articulo::findOrFail($id);
        $articulo->nombre = $request->nombre;
        $articulo->talla = $request->talla;
        $articulo->color = $request->color;
        $articulo->precio = $request->precio;
        $articulo->stock = $request->stock;
        $articulo->descripcion = $request->descripcion;
        $articulo->img = $request->img;

        $articulo->save();
        return $articulo;
    }

    public function destroy($id)
    {
        $articulo = Articulo::destroy($id);
        return $articulo;
    }
}
