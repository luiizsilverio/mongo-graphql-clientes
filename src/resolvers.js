const { ObjectId } = require('mongodb')
const { getDb } = require("./db/connection")

module.exports = {
  Query: {
    resposta: () => {
      return 'GraphQL!'
    },

    saudacao: (_, args) => {
      return `Seja bem vindo, ${args.nome}!`
    },

    findCliente: (_, { id }) => {
      const _id = new ObjectId(id)

      return getDb()
        .db()
        .collection('clientes')
        .findOne({ _id })
        .then((response) => {
          return response
        })
    },

    findClientes: async (_, { input }) => {
      return await getDb()
        .db()
        .collection('clientes')
        .find(input)
        .toArray()
    }
  },

  Mutation: {
    insertCliente: async (_, { input }) => {
      const response = await getDb()
        .db()
        .collection('clientes')
        .insertOne(input)

      const id = response.insertedId
      return { id, ...input }

    },

    updateCliente: (_, args) => {
      const _id = new ObjectId(args.id)

      getDb()
        .db()
        .collection('clientes')
        .updateOne({ _id }, {$set: args.input})
        .then((response) => {
          return 'Cliente alterado com sucesso'
        })
    },

    deleteCliente: (_, { id }) => {
      const _id = new ObjectId(id)

      getDb()
        .db()
        .collection('clientes')
        .deleteOne({ _id })
        .then((response) => {
          return 'Cliente excluído com sucesso'
        })
    }
  }
}