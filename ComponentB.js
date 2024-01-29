import React, { Component } from 'react'
import ComponentD from './ComponentD'
import UserContext from './UserContext'

class ComponentB extends Component {
    static contextType = UserContext
    render() {
        return (
            <div><ComponentD/>{this.context}</div>
        )
    }
}

export default ComponentB
