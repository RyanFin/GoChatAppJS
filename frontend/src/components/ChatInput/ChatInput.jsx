import React, {Component} from "react";
import "./ChatInput.scss";

class ChatInput extends Component{
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} placeholder="write msg and press enter to send..."/>
            </div>
        )
    }
}

export default ChatInput;


