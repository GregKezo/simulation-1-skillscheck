import React from 'react'


const Product = (props) => {
  return(
    <div className="product">
      <img src="nope" alt="product" /> 
      <div className="description">
        <h2 className="prod-name">Name</h2>
        <h3 className="prod-price">$10</h3>
      </div>
    </div>
  )
}


export default Product