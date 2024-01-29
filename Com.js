import React, { Component } from 'react'

class Com extends Component {
    render() {
        console.log("Com")
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Com
