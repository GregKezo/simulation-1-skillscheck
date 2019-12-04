import React from 'react';
import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import axios from 'axios'

// axios.defaults.proxy.host = "http://localhost:4420"
// axios.defaults.proxy.port = "4420"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inventory: [],
      editing: false,
      currentProduct: []
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

  render() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Dashboard 
        inventory={this.state.inventory} 
        getFn={this.getProducts}
        editFn={this.editProduct}
        />
        <Form 
          getFn={this.getProducts} 
          editing={this.state.editing} 
          editFn={this.toggleEdit}
          currentProduct={this.state.currentProduct[0]}
        />
      </div>
    </div>
  );
  }
}

export default App;
