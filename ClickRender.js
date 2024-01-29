import React, { Component } from 'react'

class ClickRender extends Component {
     render() {
        const {count,increment} = this.props
        return (
        <button onClick={increment}>Cliked {count} times</button>)
    }
}

export default ClickRender
