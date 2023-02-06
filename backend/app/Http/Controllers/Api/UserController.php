<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->rol = $request->rol;

        $user->save();
        return $user;
    }

    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($request->id);
        $user->dni = $request->dni;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->rol = $request->rol;

        $user->save();
        return $user;
    }

    public function destroy($id)
    {
        $user = User::destroy($id);
        return $user;
    }
}
