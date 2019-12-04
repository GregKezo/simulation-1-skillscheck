import React from 'react'
import Product from './Product'


class Dashboard extends React.Component {
  constructor(props){
    super(props)

  }
  
  
  render() {
  return(
    <div className="dash">
      {this.props.inventory.map( product => {
        let { id, img, name, price } = product
        return( <Product 
          key={id}
          img={img}
          name={name}
          price={price} />)
        })}
    </div>

  )
  }
}

export default Dashboard