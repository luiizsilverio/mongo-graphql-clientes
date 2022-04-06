# MONGO-GRAPHQL-CLIENTES

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Exemplos de Queries](#exemplos-de-queries)
* [Exemplos de Mutations](#exemplos-de-mutations)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API GraphQL desenvolvida em __Node.js__ e __express-graphql__.<br />
CRUD completo de clientes, utilizando banco de dados __MongoDB__.<br />
Desenvolvido durante o curso [Rest API e GraphQL com Node.js](https://www.udemy.com/course/rest-api-e-graphql-com-nodejs/).
<br />

## :hammer_and_wrench: Tecnologias
* __Node.js__
* GraphQL com __Express-GraphQL__
* Banco de dados __MongoDB__

## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/mongo-graphql-clientes.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação
$ yarn dev
```
Acesse o link [http://localhost:3000/clientes](http://localhost:3000/clientes) para rodar as queries e mutations.
<br />


## Exemplos de Queries
```graphql
{
  findCliente(id: "622b81013bc3868bd68094c2") {
    id,
    nome,
    idade,
    email
  }
}

{
  findClientes(input:{
  }) {
    id,
    nome,
    idade,
    email
  }
}
```

## Exemplos de Mutations
```graphql
mutation {
  insertCliente(input: {
    nome: "Luiz",
    idade: 37,
    email: "luiz@gmail.com"
  }) {
    id,
    nome,
    idade,
    email
  }
}

mutation {
  deleteCliente(id: "622b803f3bc3868bd68094c0")
}

mutation {
  updateCliente(id: "622b81013bc3868bd68094c2", input: {
    nome: "João",
    idade: 32,
    email: "joao@gmail.com"
  })
}
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
