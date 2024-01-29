import React,{useState,useEffect} from 'react'

function MouseHook() {
    const [x,setx] = useState(0);
    const [y,setY] = useState(0);
    
    const logMouse = (e) => {
        console.log("Mouse")
        setx(e.clientX);
        setY(e.clientY);
    }
    useEffect(
        () =>{
            console.log("UseEffect");
            window.addEventListener('mousemove',logMouse)

            return () =>{
                console.log("removed")
                window.removeEventListener('mousemove',logMouse)
            }
        },[]
    )
    return (
        <div>
            x - {x} y - {y}
        </div>
    )
}

export default MouseHook
