import React, {Component} from 'react'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
      ,price: 0
      ,imgurl:''
    }
  }

  handleChange = (e) => {
    let { name, value } = e.target
    name !== "price"
    ? this.setState({ [name] : value })
    : isNaN(+value)
      ? this.setState({ [name] : this.state.price })
      : this.setState({ [name] : +value })
  }

  postProduct = () => {
    //TODO post product
  }

  clearInputs = () => {
    this.setState({
      name: ''
      ,price: 0
      ,imgurl: ''
    })
  }

  // componentDidUpdate(prevState, prevProps) {
  //   if (prevState !== this.state)
  //   this.render()
  // }


  render(){
    return(
      <section className="form">
        <div className="preview-img">
          <img src={this.state.imgurl} alt='product preview' />
        </div>
        <div className="input-fields">
          <h3>Image URL:</h3>
          <input name="imgurl" onChange={this.handleChange} value={this.state.imgurl}/>
          <h3>Product Name:</h3>
          <input name="name" onChange={this.handleChange} value={this.state.name}/>
          <h3>Price:</h3>
          <input name="price" onChange={this.handleChange} value={this.state.price} />
        </div>
        <div className="button-space">
          <button onClick={this.clearInputs}>Cancel</button>
          <button onClick={this.postProduct}>Add to Inventory</button>
        </div>

      </section>
    )
  }
}

export default Form