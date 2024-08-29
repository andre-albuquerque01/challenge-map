<?php

use App\Http\Controllers\Api\RodoviaController;
use App\Http\Controllers\Api\TrechoController;
use App\Http\Controllers\Api\UfController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () {
    Route::apiResource('trecho', TrechoController::class);
    Route::get('uf', [UfController::class, 'index']);
    Route::get('rodovia', [RodoviaController::class, 'index']);
});
