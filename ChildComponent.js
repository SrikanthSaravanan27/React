import React from "react";

function ChildComponent(props){
    return(
        <div>
            <button onClick={() => {props.greetfunc("Child")}}>Greet ParentComponent</button>
        </div>
    )
}

export default ChildComponent