import React from 'react'
import {Link} from 'react-router-dom'


const Product = (props) => {
  return(
    <div className="product">
      <img src={props.img} alt="product" /> 
      <div className="description">
        <h2 className="prod-name">{props.name}</h2>
        <h3 className="prod-price">${props.price}</h3>
        <div className="button-area">
          <button id={props.id} onClick={props.deleteFn}>Delete</button>
          <Link to={`/edit/${props.id}`} ><button id={props.id} onClick={props.editFn}>Edit</button></Link>
        </div>
      </div>
    </div>
  )
}


export default Product