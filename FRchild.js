import React from 'react'

const FRchild = React.forwardRef(
    (props,ref) =>{
        return (
            <div>
                <input type='text' ref={ref}></input>
            </div>
        )
    }
)

export default FRchild
