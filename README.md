# DoneList Back-End
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

```
BackEnd do APP DoneList feito com NodeJS + Typescript com Docker e Postgres
```

## Instalando dependências

No terminal, depois de fazer o clone com `git clone https://github.com/afuturae/donelist-backend` e entrar na pasta criada:

```
yarn
```

## Criando imagem do docker na máquina

```
docker run --name donelist -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

[ref](https://github.com/brunosana/dev-gostack/blob/master/Docker/CriandoContainerBanco.md)

Usamos o [Dbeaver](https://dbeaver.io/) para gerenciar o Banco de Dados ([ref](https://github.com/brunosana/dev-gostack/blob/master/Docker/ConfigurandoTypeORM.md)).

Ao executar a imagem do Docker (veja a referência), utilizando o DBeaver, abra uma conexão com o Postgres e crie um Database com o nome `donelist`.

## Executando as Migrations

```
yarn typeorm migration:run
```

## Rodando o servidor

```
yarn dev:server
```

