import React from "react";

function Functionclick(){
    function clicked(){
        console.log("Button clicked")
    }
    return(
        <div>
            <button onClick = {clicked}>Click</button>
        </div>
    )
}

export default Functionclick