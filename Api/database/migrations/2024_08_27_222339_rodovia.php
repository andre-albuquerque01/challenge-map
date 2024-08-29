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
        Schema::create('rodovias', function (Blueprint $table) {
            $table->id();
            $table->string('rodovia');
            $table->unsignedBigInteger('uf_id');
            $table->foreign('uf_id')->references('id')->on('uf')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rodovia');
    }
};
