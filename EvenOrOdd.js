import React from 'react'

function EvenOrOdd({num}) {
    if(num%2 == 0){
        return <h1>{num} is even</h1>
    }
    else{
        return <h1>{num} is odd</h1>
    }
}

export default EvenOrOdd
