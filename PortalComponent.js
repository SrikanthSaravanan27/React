import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalComponent() {
    return ReactDOM.createPortal(
        <h1>Hello</h1>,document.getElementById("portal")
    )
}

export default PortalComponent
