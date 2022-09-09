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
            jsonSuccess('باموفقیت وارد سیستم شدید', ["user" => Auth::user()->returnable()]) :
            jsonError('نام کاربری یا گذرواژه اشتباه است');
    }
}
