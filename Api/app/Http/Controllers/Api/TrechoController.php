<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GeneralResource;
use App\Http\Resources\TrechoResource;
use App\Service\TrechoService;
use Illuminate\Http\Request;

class TrechoController extends Controller
{
    private TrechoService $trechoService;

    public function __construct(TrechoService $trechoService)
    {
        $this->trechoService = $trechoService;
    }

    public function index()
    {
        return $this->trechoService->index();
    }

    public function store(Request $request): GeneralResource
    {
        return $this->trechoService->store($request->all());
    }

    public function show($id)
    {
        return $this->trechoService->show($id);
    }

    public function update(Request $request, $id): GeneralResource
    {
        return $this->trechoService->update($id, $request->all(),);
    }

    public function destroy($id): GeneralResource
    {
        return $this->trechoService->destroy($id);
    }
}
