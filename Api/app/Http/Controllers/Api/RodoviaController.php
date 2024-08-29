<?php

namespace App\Http\Controllers\Api;

use App\Exceptions\GeneralExceptionCatch;
use App\Http\Controllers\Controller;
use App\Http\Resources\RodoviaResource;
use App\Models\Rodovia;
use Illuminate\Http\Request;

class RodoviaController extends Controller
{
    public function index()
    {
        try {
            return RodoviaResource::collection(Rodovia::get());
        } catch (\Exception $e) {
            throw new GeneralExceptionCatch();
        }
    }
}
