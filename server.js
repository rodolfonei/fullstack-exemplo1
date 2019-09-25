// Buscando os modules ExpressJS e Mongoose e definindo as consts
const express = require('express')
const mongoose = require('mongoose')

// Buscando o path dos routes para os items e definindo a const correspondente
const items = require('./routes/api/items')

// Inicializando Express em uma const app
const app = express()

// Incluindo JSON Parser
app.use(express.json())

// DB Config
const db = require('./config/keys').mongoURI

// Conectando com o Mongo
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Conectado...'))
  .catch(err => console.log(err))

// Usando routes
app.use('api/items', items)

// Port Config Deploy || Local
const port = process.env.PORT || 5000

// Inicializando o Server com o Port definido anteriormente
app.listen(port, () => console.log(`Servidor inicializado na port ${port}`))