import React,{Component} from "react";

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Welcome Visitor",
        }
    }
    clicked() {
        this.setState({
            message : "This is Srikanth",
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.clicked()}>HI</button>
            </div>
        )
    }
}

export default Message