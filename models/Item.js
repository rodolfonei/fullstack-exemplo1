// Buscando o module do mongoose e definindo a const correspondente
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Criando Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Item = mongoose.model('item', ItemSchema)
