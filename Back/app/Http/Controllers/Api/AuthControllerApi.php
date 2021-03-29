<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthControllerApi extends Controller
{
    public function login(AuthRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            return response()->json([
                'message'   => 'The given data was invalid.',
                'errors'    => [
                    'password' => ['Credenciais Inválidas']
                ]
            ], 422);
        }

        $token = $user->createToken($request->token)->plainTextToken;

        return response()->json([
            'data' => [
                'token' => $token
            ]
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([], 204);
    }
}
