import React, { Component } from 'react'

export class HoverRender extends Component {
    render() {
        const {count,increment} = this.props
        return (
                <h1 onMouseOver={increment}>{count}</h1>
        )
    }
}

export default HoverRender
