import React,{Component} from "react";
import Message from "./Message";

class Eventbind extends Component{
    constructor(props){
        super(props);
        this.state = {
            Message : "Hello"
        }
        // this.clicked = this.clicked.bind(this)
    }
    // clicked(){
    //     this.setState(
    //         {
    //             Message : "Thank you"
    //         }
    //     )
    //     console.log(this)
    // }

    clicked = () => {
        this.setState({
            Message : "Thank you"
        })
        console.log(this)
    }
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick = {this.clicked}>Click</button>
            </div>
        )
    }
}

export default Eventbind