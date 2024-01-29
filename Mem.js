import React from 'react'

function Mem({name}) {
    console.log("child");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Mem)
