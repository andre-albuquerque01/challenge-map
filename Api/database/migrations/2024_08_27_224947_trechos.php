<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trechos', function(Blueprint $table){
            $table->id();
            $table->string('tipo');
            $table->date('data_referencia');
            $table->float('quilometragem_inicial');
            $table->float('quilometragem_final');
            $table->json('geo');
            $table->unsignedBigInteger('uf_id');
            $table->foreign('uf_id')->references('id')->on('uf')->onDelete('cascade');
            $table->unsignedBigInteger('rodovia_id');
            $table->foreign('rodovia_id')->references('id')->on('rodovias')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trechos');
    }
};
