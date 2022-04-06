const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typeDefs = require('./schema.graphql')
const resolvers = require('./resolvers')

const app = express()
const port = 3000

// Banco de dados
const db = require('./db/connection')

db.initDb((err, db) => {
  if (err) {
    console.log(err)
  }
  else {
    console.log('Conectou no banco com sucesso')
  }
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/clientes', graphqlHTTP({
  schema,
  graphiql: true  // habilitar interface gráfica do GraphQL
  })
)

// Se acessar http://localhost:3000/clientes no navegador, mostra a interface gráfica

app.listen(port, () => {
  console.log(`Mongo_GraphQL rodando na porta ${port}`)
})
