<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trecho extends Model
{
    use HasFactory;

    protected $table = 'trechos';
    protected $fillable = [
        'tipo',
        'data_referencia',
        'quilometragem_inicial',
        'quilometragem_final',
        'geo',
        'uf_id',
        'rodovia_id',
    ];

    public function Uf()
    {
        return $this->belongsTo(Uf::class);
    }
    public function rodovia()
    {
        return $this->belongsTo(Rodovia::class);
    }
}
