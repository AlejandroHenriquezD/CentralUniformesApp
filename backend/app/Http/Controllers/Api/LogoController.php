<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Logo;
use Illuminate\Http\Request;

class LogoController extends Controller
{
    public function index()
    {
        $logos = Logo::all();
        return $logos;
    }

    public function showByUserId($id)
    {
        $logos = Logo::where('id_user', $id)->get();
        return $logos;
    }

    public function store(Request $request)
    {
        $logo = new Logo();

        $logo->nombre = $request->img;
        $logo->img = $request->img;
        $logo->id_user = $request->id_user;

        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $destinationPath = 'images/logosTable/';
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
            $logo->img = $destinationPath . $filename;
        }

        $logo->save();

        // $request->validate([
        //     'name' => 'required',
        //     'user_id' => 'required',
        //     'img' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);

        // $input = $request->all();

        // if ($img = $request->file('img')) {
        //     $destinationPath = 'images/imagesTable/';
        //     $filename = date('YmdHis') . "." . $img->getClientOriginalExtension();
        //     $img->move($destinationPath, $filename);
        //     $input['img'] = "$filename";
        // }

        // image::create($input);
    }

    public function show($id)
    {
        $logo = Logo::find($id);
        return $logo;
    }

    public function update(Request $request, $id)
    {
        // $image = image::findOrFail($request->id);
        // $image->name = $request->name;
        // $image->user_id = $request->user_id;

        // //$input = $request->all();

        // if( $request->hasFile('img') ) {
        //     $file = $request->file('img');
        //     $destinationPath = 'images/imagesTable/';
        //     $filename = time() . '-' . $file->getClientOriginalName();
        //     $uploadSuccess = $request->file('img')->move($destinationPath, $filename);
        //     $image->img = $destinationPath . $filename;
        // }

        // //$image->update($input);
        // $image->save();
        // return $image;
        // $logo = image::find($id);
        // $logo->name = $request->name;
        // $logo->user_id = $request->user_id;

        // if ($request->hasfile('img')) {
        //     $destinationPath = 'images/imagesTable/'.$logo->img;
        //     if(File::exists($destinationPath))
        //     {
        //         File::delete($destinationPath);
        //     }
        //     $img = $request->file('img');
        //     $filename = date('YmdHis') . "." . $img->getClientOriginalExtension();
        //     $img->move('images/imagesTable/', $filename);
        //     $logo->img = $filename;
        // }

        // $image = image::find($id);
        // $logo->update();
        // Post::findOrFail($id)->update($input);
    }

    public function destroy($id)
    {
        $logo = Logo::destroy($id);
        return $logo;
    }
}
