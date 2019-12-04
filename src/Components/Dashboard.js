import React from 'react'
import Product from './Product'
import axios from 'axios'


class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      editing: false
      // ,currentProduct: []
    }
    this.getProducts = this.getProducts.bind(this)
  }

  getProducts() {
    axios.get('http://localhost:4420/api/inventory')
    .then( res => {
      this.setState({
        inventory: res.data
      })
    })
    .catch( err => console.log(err))
  }

  componentDidMount(){
    this.getProducts()
  }

  toggleEdit = () => {
    this.setState({
      editing: false,
      currentProduct: []
    })
  }

  editProduct = (e) => {
    let {id} = e.target
    let curProd = this.state.inventory.filter( ele => ele.id === +id )
    this.setState({
      editing: true,
      currentProduct: curProd
    })
  }

  // constructor(props){
  //   super(props)

  // }
  
  handleDelete = (e) => {
    const {id} = e.target
    axios.delete(`http://localhost:4420/api/inventory/${id}`)
      .then( res => {
        console.log(res)
        this.getProducts()
      })
      .catch( err => console.log(err))
  }

  // componentDidUpdate(prevState) {
  //   if( this.state !== prevState) this.render()
  // }
  
  render() {
  return(
    <div className="dash">
      {this.state.inventory.map( product => {
        let { id, img, name, price } = product
        return( <Product 
          key={id}
          id={id}
          img={img}
          name={name}
          price={price} 
          deleteFn={this.handleDelete}
          // editFn={this.props.editFn}
          />)
        })}
    </div>

  )
  }
}

export default Dashboard