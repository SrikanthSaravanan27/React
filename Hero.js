import React from 'react'

function Hero({name}) {
    if(name === 'Joker'){
        throw new Error("Villan da");
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default Hero
