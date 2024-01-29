import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    static getDerivedStateFromError(error){
        return {hasError :true}
    }
    render() {
        if(this.hasError){
            return <div>Villan</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary
