import React, { useEffect, useState } from 'react'

function ConditionalRender() {
    const [count,setCount] = useState(0)
    const [name,setName] =useState("")

    useEffect(
        () => {document.title = `Clicked ${count} times`;
        console.log("Hi")},[count]
    )
    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
        </div>
    )
}

export default ConditionalRender
