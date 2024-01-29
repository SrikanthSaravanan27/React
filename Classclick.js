import React,{Component} from "react";

class Classclick extends Component{
    clicked(){
        console.log("Button clicked")

    }
    render(){
        return(
            <div>
                <button onClick={this.clicked}>Click</button>
            </div>
        )
    }
}

export default Classclick