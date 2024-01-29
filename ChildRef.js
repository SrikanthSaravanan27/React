import React, { Component } from 'react'

class ChildRef extends Component {
    constructor(props) {
        super(props)
    
        this.refer = React.createRef();
    }
    focusHandler = () =>{
        this.refer.current.focus();
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.refer}/>
            </div>
        )
    }
}

export default ChildRef
