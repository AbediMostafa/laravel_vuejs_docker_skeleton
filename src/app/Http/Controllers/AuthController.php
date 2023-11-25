<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends BaseController
{
    public function login()
    {
        $credentials = \request()->only('email', 'password');

        return Auth::attempt($credentials) ?
            jsonSuccess('success', ["user" => Auth::user()->returnable()]) :
            jsonError('error');
    }
}
