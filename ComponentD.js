import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentD extends Component {
     render() {
        return (
            <UserConsumer>
                {
                    (name) => {
                        return <div>Hello {name}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentD
