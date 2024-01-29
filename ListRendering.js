import React from 'react'
import Person from './Person'
import EvenOrOdd from './EvenOrOdd'

function ListRendering() {
    // const persons = [
    //     {
    //         name : "Bruce",
    //         age : 30
    //     },
    //     {
    //         name : "Diana",
    //         age : 25
    //     }
    // ] 
    // const result = persons.map(person => <Person person = {person}></Person> )
    // return (
    //     <div>
    //         {result}
    //     </div>
    // )
    const number = [1,2,3,4,5,6,7,8,9,10,12,13,141,4]
    const even = number.map(num => <EvenOrOdd num ={num}></EvenOrOdd>)
    console.log(even)
    return(
        <div>{even}</div>
    )
}

export default ListRendering
