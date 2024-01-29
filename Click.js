import React, { Component } from 'react'
import updateComponent from './updateComponent'

export class Click extends Component {
    render() {
        const {count , increment} = this.props
        return (
            <div>
                <button onClick={increment}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default updateComponent(Click,2)
