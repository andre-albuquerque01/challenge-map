<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Trecho>
 */
class TrechoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tipo' => 'B',
            'data_referencia' => fake()->date(),
            'quilometragem_inicial' => fake()->randomDigit(),
            'quilometragem_final' => fake()->randomDigit(),
            'geo' => json_encode([
                'latitude' => fake()->latitude(),
                'longitude' => fake()->longitude(),
            ]),
            'uf_id' => fake()->numberBetween(1, 27),
            'rodovia_id' => fake()->numberBetween(1 , 200),
        ];
    }
}
