

import "./App.css";
import Child from "./Child";
import { Button, Input } from "antd";
import React from 'react';
class Life extends React.Component{
  
   state = {
    count: 0,
  };
   handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
   handleClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    let style = { padding: 50 };
    return (
      <div className="content">
        <p>React生命周期介绍</p>
        <Input></Input>
        <Button onClick={this.handleAdd} type="primary">
          AntD点击一下
        </Button>
        <button onClick={this.handleAdd} style={style}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );
  }
  
}
function App() {
  return (
    <div className="App">
      <Life />
    </div>
  );
}

export default App;
