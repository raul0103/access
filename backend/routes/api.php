<?php

use App\Http\Middleware\Cors;
use Illuminate\Support\Facades\Route;

Route::middleware([
    Cors::class
])->get('/', function () {
    return response()->json(['message' => 'Laravel REST API is running']);
});
