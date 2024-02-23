import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./index";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

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

  send(event) {
    // 13 is the Enter key on the keyboard
    if (event.keyCode === 13){
      // send the value within the input box to the send msg func
      sendMsg(event.target.value);
      // clear the input box
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        {/* run the send function from an input box */}
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;