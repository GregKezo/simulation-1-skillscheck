module.exports ={


  getAllProducts: (req, res, next) => {
    const db = req.app.get('db')
    
    db.read_products()
      .then( product => res.status(200).send( product ) )
      .catch( err => res.status(500).send( err ) )

  },


  addProduct: (req, res, next) => {

  }



}