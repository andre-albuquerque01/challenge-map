# Sistema de geração de mapa

## Requisitos do Sistema

Para operar o sistema, são necessários os seguintes requisitos mínimos na sua máquina: PHP, Composer, Node.js e Docker. O PHP e o Composer são essenciais para executar o Laravel, que contém a API principal do sistema. O Node.js é necessário para executar o front-end, enquanto o Docker é utilizado para virtualizar o ambiente no qual a API é executada. Estes componentes garantem a funcionalidade e o desempenho ideais do nosso sistema de forma integrada e eficiente.

## Arquitetura do Sistema

O sistema utiliza as seguintes linguagens:

- PHP
- TypeScript

Banco de dados:

- MySQL

Frameworks:

- Laravel 11
- Next.js 14

Arquitetura da API:

- MVC
- RESTful

Além disso, faz uso de:

- React
- Docker

## Como Iniciar o Sistema

### Passo 1: Download dos Arquivos

Clone o repositório:

```bash
git clone https://github.com/andre-albuquerque01/challenge-map
```

### Passo 2: Configuração do Back-end

Entre na pasta back-end:

```bash
cd /challenge-map/Api
```

Inicialize os pacotes do Laravel:

```php
composer install
```

Crie um arquivo `.env` na raiz do seu projeto e configure as variáveis de ambiente conforme necessário.
Execute `php artisan config:cache` para aplicar as configurações do arquivo `.env`.

Inicie o servidor da API:

```bash
sudo ./vendor/bin/sail up
```

Para desativar o servidor da API:

```bash
sudo ./vendor/bin/sail down
```

Suba o banco de dados:

```bash
sudo ./vendor/bin/sail artisan migrate
```

### Passo 3: Configuração do Front-end

Entre na pasta front-end:

```bash
cd ../front
```

Baixe as dependências do Node.js:

```bash
npm i
```

Inicie o servidor do Next.js:

```bash
npm run dev
```

### Passo 4: Acesso ao Sistema

Abra o navegador e acesse `http://localhost:3000` para utilizar o serviço.
