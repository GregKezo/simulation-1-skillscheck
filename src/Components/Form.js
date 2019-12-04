import React, {Component} from 'react'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
      ,price: 0
      ,img:''
      ,id: null
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

  getProduct = () => {
    const {id} = this.props.match.params
    console.log(this.props.match.params.id)
    axios.get(`http://localhost:4420/api/inventory/${id}`)
      .then( res => {
        const { id, name, price, img } = res.data[0]
        this.setState({
          name: name
          ,price: price
          ,img: img
          ,id: id
        })
      })
  }

  postProduct = () => {
    const body = this.state
    axios.post('http://localhost:4420/api/product', body)
      .then( (res) => {
        console.log(res.data)
        // this.props.getFn()
      })
      .catch( err => console.log(err) )
      
      this.clearInputs()
  }



  putProduct = (e) => {
    const body = this.state
    const {id} = e.target
    // console.log(e.target.id)
    
    axios.put(`http://localhost:4420/api/inventory/${id}`, body)
      .then( res => {
        // console.log(res.data)
        this.props.getFn()
      })
      .catch( err => console.log(err) )

      this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: ''
      ,price: 0
      ,img: ''
      ,id: null
    })
    // this.props.editFn()
  }


  componentDidMount() {
    this.getProduct()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.currentProduct && prevProps.currentProduct !== this.props.currentProduct) {
      const {id, name, price, img } = this.props.currentProduct
      this.setState({
        id: id,
        name: name,
        price: price,
        img: img
      })
    }
  }


  render(){

    return(
       typeof this.props.match.params.id === 'string' 
      ? <section className="form">
      <div className="preview-img">
        <img src={this.state.img} alt='product preview' />
      </div>
      <div className="input-fields">
        <h3>Image URL:</h3>
        <input name="img" onChange={this.handleChange} value={this.state.img}/>
        <h3>Product Name:</h3>
        <input name="name" onChange={this.handleChange} value={this.state.name}/>
        <h3>Price:</h3>
        <input name="price" onChange={this.handleChange} value={+this.state.price} />
      </div>
      <div className="button-space">
        <button onClick={this.clearInputs}>Cancel</button>
        <button id={this.state.id} onClick={this.putProduct}>
          {/* <Link to='/'> */}
            Save Changes
            {/* </Link> */}
        </button>
      </div>
    </section>

     : <section className="form">
     <div className="preview-img">
       <img src={this.state.img} alt='product preview' />
     </div>
     <div className="input-fields">
       <h3>Image URL:</h3>
       <input name="img" onChange={this.handleChange} value={this.state.img}/>
       <h3>Product Name:</h3>
       <input name="name" onChange={this.handleChange} value={this.state.name}/>
       <h3>Price:</h3>
       <input name="price" onChange={this.handleChange} value={this.state.price} />
     </div>
     <div className="button-space">
       <button onClick={this.clearInputs}>Cancel</button>
       <button onClick={this.postProduct}>
         <Link to='/' >Add to Inventory</Link>
        </button>
     </div>
   </section>
   
    )
  }
}

export default Form