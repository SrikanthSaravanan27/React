import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment(){
        // this.setState({
        //     count : this.state.count + 1
        // },() => {
        //     console.log(`set state ${this.state.count}`)
        // })
        // console.log(this.state.count)
        this.setState(
            (previousState) =>({
                count : previousState.count + 1
            })
        )
    }
    incrementfive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
