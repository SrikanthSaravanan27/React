import React, { Component } from 'react'

class Ref extends Component {
    constructor(){
        super();
        this.refer = React.createRef();
        this.cbref = null;
        this.setcbref = (element) =>{
            this.cbref = element;
        }
    }
    componentDidMount(){
        this.refer.current.focus();
        if(this.cbref){
            this.cbref.focus();
        }
    }
    clickHandler = () =>{
        alert(this.refer.current.value);
    }
    render() {
        return (
            <div>
                <input type='text' ref={this.refer}></input>
                <button onClick={this.clickHandler}>Click</button>
                <input type='text' ref={this.setcbref}></input>
            </div>
        )
    }
}

export default Ref
