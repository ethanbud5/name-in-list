import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from "./Child"

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:"",
      names:["Tim","Wendi","Lora Lynn","Noah","Abbi","Rebekah"],
      hasName:false
    }
    this.searchNames = this.searchNames.bind(this)
  }
  searchNames(e){
    let hasName = this.state.names.includes(e.target.value)
    this.setState({hasName})
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Child listArray ={this.state.names} hasName={this.state.hasName} searchNames={this.searchNames}/>       
      </div>
    );
  }
}

export default App;
