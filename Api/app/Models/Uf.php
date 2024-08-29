<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Uf extends Model
{
    use HasFactory;

    protected $table = 'uf';
    protected $fillable = [
        'uf',
    ];

    public function trechos()
    {
        return $this->hasMany(Trecho::class, 'uf_id');
    }

    public function rodovia()
    {
        return $this->hasMany(Rodovia::class, 'uf_id');
    }
}
