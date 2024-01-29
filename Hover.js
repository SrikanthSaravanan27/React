import React, { Component } from 'react'
import updateComponent from './updateComponent'

export class Hover extends Component {
    render() {
        const {count,increment} = this.props
        return (
            <div>
                <h1 onMouseEnter={increment}>{this.props.name} Number of Hovers {count}</h1>
            </div>
        )
    }
}

export default updateComponent(Hover,4)
