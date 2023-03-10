<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function empleadosonly()
    {
        $users = DB::table('users')
            ->where('rol', '!=', "Cliente")
            ->get();
        return $users;
    }

    public function index()
    {
        $users = User::all();
        return $users;
    }

    public function clientesonly()
    {
        $users = DB::table('users')
            ->where('rol', '=', "Cliente")
            ->get();
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
        $user->name = base64_decode($request->name);
        $user->email = $request->email;

        if ($request->password == null) {
            $user->password = bcrypt(base64_decode($request->password));
        }

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
