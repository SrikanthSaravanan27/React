import React,{useState} from 'react'

function HookCounter() {
    const initial = 0;
    const [count,setCount] = useState(initial);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(prevState=>prevState+1)}}>increment</button>
            <button onClick={()=>{setCount((prevState)=>{return prevState-1})}}>decrement</button>
            <button onClick={()=>{setCount((prevState)=>{return prevState+5})}}>increment 5</button>
        </div>
    )
}

export default HookCounter
