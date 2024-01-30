import React,{useContext} from 'react'
import { UserContext } from '../App'

function ContextAndReducer() {
    const Context = useContext(UserContext)
    return (
        <div>
            <h1>{Context.countState}</h1>
            <button onClick={() => Context.countDispatch("increment")}>increment</button>
            <button onClick={() => Context.countDispatch("decrement")}>decrement</button>
            <button onClick={() => Context.countDispatch("reset")}>reset</button>
        </div>
    )
}

export default ContextAndReducer
