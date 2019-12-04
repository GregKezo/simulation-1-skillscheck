require('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./controllers/products_ctrl')
const gs = require('gradient-string')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())


const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
  .then(db => {
    console.log(`db live`)
    app.set('db', db)
  })
  .catch( err => console.log(err))

app.get('/api/inventory', ctrl.getAllProducts)
app.get('/api/inventory/:id', ctrl.getProduct)
app.post('/api/product', ctrl.addProduct)
app.put('/api/inventory/:id', ctrl.editProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)



  app.listen(SERVER_PORT, console.log(gs.pastel(`Server blazin' it up on ${SERVER_PORT}`)))