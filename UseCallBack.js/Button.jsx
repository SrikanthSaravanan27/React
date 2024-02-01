import React from 'react'

function Button({handelClick , children}) {
    return (
        <div>
            <button onClick={handelClick}>{children}</button>
        </div>
    )
}

export default Button
