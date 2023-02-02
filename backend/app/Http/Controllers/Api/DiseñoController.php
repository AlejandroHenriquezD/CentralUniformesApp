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

    public function showByUserId($id) {
        $designs = Diseño::where('user_id',$id)->get();
        return $designs;
    }

    public function countByUserId($id) {
        return $this->showByUserId($id)->count();
        // return $counter;
    }

    public function store(Request $request)
    {
        $design = new Diseño();

        if( $request->hasFile('img') ) {
            $file = $request->file('img');
            $destinationPath = 'images/diseñoTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $design->img = $destinationPath . $filename;
        }

        $design->name = $request->name;
        $design->position = $request->position;
        $design->size = $request->size;
        $design->favourite = $request->favourite;
        $design->logo_id = $request->logo_id;
        $design->articulo_id = $request->articulo_id;
        $design->user_id = $request->user_id;
        $design->img = $request->img;

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
        $design->name = $request->name;
        $design->position = $request->position;
        $design->size = $request->size;
        $design->favourite = $request->favourite;
        $design->logo_id = $request->logo_id;
        $design->articulo_id = $request->articulo_id;
        $design->user_id = $request->user_id;
        $design->img = $request->img;

        $design->save();
    }

    public function destroy($id)
    {
        $design = Diseño::destroy($id);
        return $design;
    }
}
