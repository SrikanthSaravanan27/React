import React,{useState} from 'react'

function UseHookComponent() {
    const [count,setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count+1)}>{count}</button>
        </div>
    )
}

export default UseHookComponent
