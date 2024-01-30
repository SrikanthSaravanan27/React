import React,{useContext} from 'react'
import { UserContext } from '../App'
function InnerComponent() {
    const name = useContext(UserContext)
    return (
        <div>
            {name}
        </div>
    )
}

export default InnerComponent
