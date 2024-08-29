<?php

namespace App\Console\Commands;

use League\Csv\Reader;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportCsvData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:csv {file}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $filePath = $this->argument('file');

        if (!file_exists($filePath) || !is_readable($filePath)) {
            $this->error('Arquivo CSV não encontrado ou não pode ser lido.');
            return 1;
        }

        $csv = Reader::createFromPath($filePath, 'r');
        $csv->setHeaderOffset(0); // Se o arquivo CSV tiver cabeçalho

        $records = $csv->getRecords();

        foreach ($records as $record) {
            DB::table('rodovias')->insert([
                'id' => $record['id'],
                'uf_id' => $record['uf_id'],
                'rodovia' => $record['rodovia'],
            ]);
        }

        // foreach ($records as $record) {
        //     DB::table('uf')->insert([
        //         'id' => $record['id'],
        //         'uf' => $record['uf'],
        //     ]);
        // }

        $this->info('Dados importados com sucesso!');
        return 0;
    }
}
