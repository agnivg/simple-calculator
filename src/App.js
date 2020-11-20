import React, { Component } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { ClearButton } from './ClearButton';
import { Backspace } from './Backspace';
import {evaluate} from 'mathjs';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:""
    };
    this.addToInput=this.addToInput.bind(this);
  }
  addToInput=(val)=>{
    this.setState({input: this.state.input+val});
  }
  handleEqual=()=>{
    this.setState({input: evaluate(this.state.input)});
  }
  handleBackspace=()=>{
    let val=this.state.input;
    const len=val.length-1;
    val=val.substring(0,len);
    this.setState({input: val});
  }
  render(){
  return (
    <div className="app">
      <div className="calc-wrapper">
      <Input input={this.state.input}/>
        <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={()=>this.handleEqual()}>=</Button>
            <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="row">
            <ClearButton handleClear={()=>this.setState({input:""})}>CLR</ClearButton>
            <Backspace handleClick={()=>this.handleBackspace()}>DEL</Backspace>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
