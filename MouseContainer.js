import React, { useState } from 'react'
import MouseHook from './MouseHook'

function MouseContainer() {
    const [display,toggle] = useState(true)

    return (
        <div>
            <button onClick={() => {toggle(!display)}}>Toggle</button>
            {display && <MouseHook/>}
        </div>
    )
}

export default MouseContainer
