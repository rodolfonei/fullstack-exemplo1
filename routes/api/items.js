// Buscando o module Express e definindo a const
const express = require('express')

// Buscando e definindo a função Router do Express
const router = express.Router()

// Item model
const Item = require('../../models/Item')

// @route GET api/items
// @desc Buscar todos os Itens
// @access Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
})

// @route POST api/items
// @desc Criar um Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  newItem.save().then(item => res.json(item))
})

// @route DELETE api/items/:id
// @desc Deletar um Post
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }))
})


module.exports = router