module.exports ={


  getAllProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.read_products()
      .then( product => res.status(200).send( product ) )
      .catch( err => res.status(500).send( err ) )
  },


  addProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { name, price, img } = req.body

    db.create_product([ name, price, img ])
      .then( () => res.sendStatus(200) )
      .catch( err => res.send(500).send(err) )
  },

  editProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { name, price, img } = req.body
    const  { id } = req.params

    db.update_product([ id, name, price, img ])
      .then( () => res.sendStatus(200) )
      .catch( err => res.send(500).send(err) )

    //todo sql. functionality.

  },

  deleteProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { id } = req.params

    db.delete_product([ id ])
      .then( () => res.sendStatus(200) )
      .catch( err => res.send(500).send(err) )
  }

}