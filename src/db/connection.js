const {MongoClient} = require('mongodb')

// notesDb é o nome do banco de dados
const url = "mongodb://localhost:27017/clientes"
// const dbName = "clientes"

let _db;

const initDb = (callback) => {
  MongoClient.connect(url, {useNewUrlParser: true /*useUnifiedTopology: true*/})
    .then((client) => {
      _db = client
      callback(null, _db)
    })
    .catch((err) => {
      callback(err)
    })
}

const getDb = () => {
  return _db
}

module.exports = {
  initDb,
  getDb
}