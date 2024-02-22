import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./index";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

class App extends Component {
  // method constructor 
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  // componentDidMount func is a React function that will be called automatically 
  // as part of the Components life-cycle.
  componentDidMount(){
    connect((msg) => {
      console.log("New Message");
      this.setState(prevState =>({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  com

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;