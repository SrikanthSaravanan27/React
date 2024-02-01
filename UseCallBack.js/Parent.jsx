import React, { useCallback, useState } from 'react'
import Title from './Title'
import Age from './Age'
import Salary from './Salary'
import Button from './Button';

function Parent() {
    const [age,setAge] = useState(23);
    const [salary,setSalary] = useState(10000000);

    const incrementAge = useCallback(() =>{
        setAge(age+1);
    },[age])
    const incrementSalary = useCallback(() =>{
        setSalary(salary+100000);
    },[salary])
    return (
        <div>
            <Title/>
            <Age count = {age}/>
            <Button handelClick ={incrementAge}>incrementAge</Button>
            <Salary salary ={salary}/>
            <Button handelClick ={incrementSalary}>incrementSalary</Button>
        </div>
    )
}

export default Parent
