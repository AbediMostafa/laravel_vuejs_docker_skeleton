<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('auth', \App\Http\Controllers\AuthController::class);

Route::middleware('auth:sanctum')->group(function () {
// authenticated routes goes here
});
