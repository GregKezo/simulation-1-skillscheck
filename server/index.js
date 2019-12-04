require('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./controllers/products_ctrl')
const gs = require('gradient-string')

const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db)
  })
  .catch( err => console.log(err))

app.get('/api/inventory', ctrl.getAllProducts)
app.post('/api/product', ctrl.addProduct)



  app.listen(SERVER_PORT, () => console.log(gs.pastel(`Server blazin' it up on ${SERVER_PORT}`)))