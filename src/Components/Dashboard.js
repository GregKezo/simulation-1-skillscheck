import React from 'react'
import Product from './Product'
import axios from 'axios'


class Dashboard extends React.Component {
  constructor(props){
    super(props)

  }
  
  handleDelete = (e) => {
    const {id} = e.target
    axios.delete(`http://localhost:4420/api/inventory/${id}`)
      .then( res => {
        console.log(res)
        this.props.getFn()
      })
      .catch( err => console.log(err))
  }
  
  render() {
  return(
    <div className="dash">
      {this.props.inventory.map( product => {
        let { id, img, name, price } = product
        return( <Product 
          key={id}
          id={id}
          img={img}
          name={name}
          price={price} 
          deleteFn={this.handleDelete}
          editFn={this.props.editFn}
          />)
        })}
    </div>

  )
  }
}

export default Dashboard