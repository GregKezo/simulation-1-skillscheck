import React from 'react';
import './App.css';
import Header from './Components/Header'
import Dashboard from './Components/Dashboard'
import Form from './Components/Form'
import axios from 'axios'
import routes from './routes'

// axios.defaults.proxy.host = "http://localhost:4420"
// axios.defaults.proxy.port = "4420"

class App extends React.Component {
 
  render() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        {/* <Dashboard 
        inventory={this.state.inventory} 
        getFn={this.getProducts}
        editFn={this.editProduct}
        />
        <Form 
          getFn={this.getProducts} 
          editing={this.state.editing} 
          editFn={this.toggleEdit}
          currentProduct={this.state.currentProduct[0]}
        /> */}
        {routes}
      </div>
    </div>
  );
  }
}

export default App;
