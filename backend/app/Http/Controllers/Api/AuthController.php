<?php

namespace App\Http\Controllers\API;

use App\Models\Cliente;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
// use Validator;
use App\Models\User;
use Illuminate\Support\Facades\Validator;




class AuthController extends BaseController
{
    public function signin(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => base64_decode($request->password)])) {
            $authUser = Auth::user();
            $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken;
            $success['id'] =  $authUser->id;

            return $this->sendResponse($success, 'User signed in');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }
    public function signupclient(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'dni' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Error validation', $validator->errors());
        }

        $input = $request->all();
        $input['rol'] = 'Cliente';
        $input['password'] = bcrypt(base64_decode($input['password']));
        $input['name'] = base64_decode($input['name']);

        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['id'] =  $user->id;

        $cliente = new Cliente();
        $cliente->telefono = $request->telefono;
        $cliente->direccion = $request->direccion;
        $cliente->codigo_postal = $request->codigo_postal;
        $cliente->municipio = $request->municipio;
        $cliente->provincia = $request->provincia;
        $cliente->observaciones = $request->observaciones;
        $cliente->id_user = $user->id;

        $cliente->save();

        return $this->sendResponse($success, 'User created successfully.');
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'dni' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'rol' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Error validation', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt(base64_decode($input['password']));
        $input['name'] = base64_decode($input['name']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['id'] =  $user->id;

        return $this->sendResponse($success, 'User created successfully.');
    }


    public function userProfile()
    {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil de usuario",
            "data" => auth()->user()
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "status" => 1,
            "msg" => "Cierre de sesi??n"
        ]);
    }
}
