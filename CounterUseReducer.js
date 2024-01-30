import React,{useReducer} from 'react'

const initialvalue = {
    firstCounter : 0,
    secondCounter : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case "increment":
            return {...state , firstCounter : state.firstCounter + 1}
        case "decrement":
            return { ...state ,firstCounter : state.firstCounter - 1}
        case "reset":
            return { ...state ,firstCounter : initialvalue.firstCounter}
        case "increment1":
            return {...state , secondCounter : state.secondCounter + 1}
        case "decrement2":
            return { ...state ,secondCounter : state.secondCounter - 1}
        default:
            return state
    }
}
function CounterUseReducer() {

    const [count,dispatch] = useReducer(reducer,initialvalue)
    return (
        <div>
            <h1>{count.firstCounter}</h1>
            <button onClick={() => dispatch({type : "increment"})}>increment</button>
            <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
            <button onClick={() => dispatch({type : "reset"})}>reset</button>
            <div>
                <h1>{count.secondCounter}</h1>
                <button onClick={() => dispatch({type : "increment1"})}>increment</button>
                <button onClick={() => dispatch({type : "decrement2"})}>decrement</button>
            </div>
        </div>
    )
}

export default CounterUseReducer
