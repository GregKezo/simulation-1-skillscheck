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

    //TODO make sql statement. then write the function
  },

  editProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { name, price, imgurl } = req.body
    const  { id } = req.params

    //todo sql. functionality.

  },

  deleteProduct: (req, res, next) => {
    const db = req.app.get('db')
    const { id } = req.params

    //todo sql. functionality.

  }

}