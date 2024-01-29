import React, { Component } from 'react'
import Mem from './Mem';

export class ParentComp extends Component {
    constructor(){
        super();
        this.state = {
            name : "Srikanth"
        }
    }
    componentDidMount(){
        setInterval(
            () => {this.setState({name : "Srikanth"})},2000
        )
    }
    render() {
        console.log("Parent");
        return (
            <div>
                <Mem name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
