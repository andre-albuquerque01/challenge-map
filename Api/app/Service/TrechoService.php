<?php

namespace App\Service;

use App\Exceptions\TrechoException;
use App\Http\Resources\GeneralResource;
use App\Http\Resources\TrechoResource;
use App\Models\Rodovia;
use App\Models\Trecho;
use App\Models\Uf;

class TrechoService
{
    public function index()
    {
        try {
            $trecho = Trecho::with(['uf','rodovia'])->get();
            return new TrechoResource($trecho);
        } catch (\Exception $e) {
            throw new TrechoException();
        }
    }

    public function store(array $data)
    {
        try {
            $data['rodovia_id'] = Rodovia::where('rodovia', $data['rodovia_id'])->first()->id;
            $data['uf_id'] = Uf::where('uf', $data['uf_id'])->first()->id;
            Trecho::create($data);
            return new GeneralResource(['message' => 'success']);
        } catch (\Exception $e) {
            throw new TrechoException();
        }
    }

    public function show(int $id)
    {
        try {
            $trecho = Trecho::with(['uf','rodovia'])->find($id);
            if (!$trecho) {
                return new GeneralResource(['message' => 'Trecho não encontrado']);
            }
            return new TrechoResource($trecho);
        } catch (\Exception $e) {
            throw new TrechoException();
        }
    }

    public function update(int $id, array $data)
    {
        try {
            $trecho = Trecho::find($id);
            if (!$trecho) {
                return new GeneralResource(['message' => 'Trecho não encontrado']);
            }
            $trecho->update($data);
            return new GeneralResource(['message' => 'success']);
        } catch (\Exception $e) {
            throw new TrechoException();
        }
    }

    public function destroy(int $id)
    {
        try {
            $trecho = Trecho::find($id);
            if (!$trecho) {
                return new GeneralResource(['message' => 'Trecho não encontrado']);
            }
            $trecho->delete();
            return new GeneralResource(['message' => 'success']);
        } catch (\Exception $e) {
            throw new TrechoException();
        }
    }
}
