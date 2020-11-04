import React, { Component } from 'react';
import './App.css';

class View extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      policyNum: '',
      referenceNum: '',
      
    };

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A view request was submitted');
    

    fetch('https://webhook.site/1220c9e0-9f4c-4a7b-92c4-03f23880f373', {
      method: 'POST',
      body: JSON.stringify(this.state)
    }).then(function(response){
      console.log(response)
      return response.json();
    });

    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Policy Number:
          <input type="text" value={this.state.policyNum} name="policyNum" onChange={this.handleChange}/><br/>
          Reference Number:
          <input type="text" value={this.state.policynum} name="referenceNum" onChange={this.handleChange}/><br/>
        </label>
        
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default View;
