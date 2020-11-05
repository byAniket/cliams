import React, { Component } from 'react';
import './App.css';

class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // address: '',
      policyNum: '',
      type: '',
      description: ''
    };

  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A create request was submitted');
    

    fetch('https://va9rrvvlz4.execute-api.us-east-2.amazonaws.com/test/claims', {
      method: 'POST',
      body: JSON.stringify({
        "policyNum": parseInt(this.state.policyNum),
        "type": this.state.type,
        "description": this.state.description
      })
    }).then(function(response){
      console.log(response);
      return response.json();
      
    });

    event.preventDefault();
  }


  //poophole
  //yur
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/* Address:
          <input type="text" value={this.state.address} name="address" onChange={this.handleChange}/><br/> */}
          Policy Number:
          <input type="text" value={this.state.policyNum} name="policyNum" onChange={this.handleChange}/><br/>
          Type of claim:
          <select value={this.state.type} name="type" onChange={this.handleChange}>
            <option value="uninsured">Uninsured and Underinsured motorist coverage</option>
            <option value="comprehensive">Comprehensive Coverage</option>
            <option value="collision">Collision Coverage</option>
            <option value="medical">Medical Payments Coverage</option>
            <option value="liablity">Liability Coverage</option>
            <option value="personal">Personal Injury Protection</option>
          </select>
          Description:
          <input type="text" value={this.state.description} name="description" onChange={this.handleChange}/><br/>
        </label>
        
        <input type="submit" value="Submit"/>
      </form>
    );
  }

}

export default Create;
