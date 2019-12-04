import React from 'react'


const Product = (props) => {
  return(
    <div className="product">
      <img src={props.img} alt="product" /> 
      <div className="description">
        <h2 className="prod-name">{props.name}</h2>
        <h3 className="prod-price">${props.price}</h3>
        <div className="button-area">
          <button id={props.id} onClick={props.deleteFn}>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  )
}


export default Product