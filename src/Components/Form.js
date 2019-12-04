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
    //TODO handle change
  }

  postProduct = () => {
    //TODO post product
  }

  clearInputs = () => {
    //on the cancel. probably merge function with post product
  }

  render(){
    return(
      <div>form component</div>
    )
  }
}

export default Form