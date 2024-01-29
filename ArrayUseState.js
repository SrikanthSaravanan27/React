import React,{useState} from 'react'

function ArrayUseState() {
    const [items,setitem] = useState([])
    const clickHandler = ()=>{
        setitem([...items ,{
            id : items.length,
            value:Math.floor(Math.random()*10 +1)
        }])
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <ul>
            {
                items.map(item => <li key={item.id}>{item.value}</li>)
            }
            </ul>
        </div>
    )
}

export default ArrayUseState
