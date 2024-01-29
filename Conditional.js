import React,{Component} from "react";

class Conditional extends Component{
    constructor(props){
        super(props)
        this.state = {
            condition : false
        }
    }
    render(){
        if(this.state.condition){
            return <div>Hi</div>
        }
        else{
            return <div>Bye</div>
        }
        // return this.state.condition?<div>Hi</div>:<div>Bye</div>
    }
}

export default Conditional