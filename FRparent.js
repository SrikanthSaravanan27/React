import React, { Component } from 'react'
import FRchild from './FRchild'
class FRparent extends Component {
    constructor(props) {
        super(props)
    
        this.refer = React.createRef()
    }
    clickHandler = () =>{
        this.refer.current.focus();
    }
    
    render() {
        return (
            <div>
                <FRchild ref={this.refer}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FRparent
