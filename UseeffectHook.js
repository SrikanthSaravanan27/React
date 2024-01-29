import React, { useEffect, useState } from 'react'

function UseeffectHook() {
    const [count,setCount] = useState(0);

    useEffect(() =>{document.title = `Clicked ${count} times`})
    return (
        <div>
            <button onClick={() => setCount(prevState => prevState + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default UseeffectHook
