import React, { PureComponent } from 'react'

class Pure extends PureComponent {
    render() {
        console.log("Pure");
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default Pure
