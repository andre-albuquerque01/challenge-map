<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\GeneralExceptionCatch;
use App\Http\Controllers\Controller;
use App\Http\Resources\UfResource;
use App\Models\Uf;
use Illuminate\Http\Request;

class UfController extends Controller
{
    public function index()
    {
        try {
            return UfResource::collection(Uf::get());
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch();
        }
    }
}
