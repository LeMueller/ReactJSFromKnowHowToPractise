import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);  
    this.const={
      name:'Le',
      age:12
     }
  }
  
  render(){
    return(
      <div>
        <span className="name" style={{color:'red', fontSize:30}}>I am {this.const.name}</span>
        <br/>
        <Age age={this.const.age}></Age>
      </div>
    )
  }
  
}

class Age extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <span>I am {this.props.age} years old</span>
    )
  }
}

export default App;
