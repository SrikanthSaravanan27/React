import React from 'react'


const updateComponent = (WrappedComponent,num) => {
    class UpdateComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count : 0
            }
        }
        increment = () =>{
            this.setState(
                (prevState)=>{
                    return {count : prevState.count + num}
                }
            )
        }
        render(){
            return (
                <WrappedComponent count = {this.state.count} increment ={this.increment} 
                {...this.props}/>
            )
        }
        
    }
    return UpdateComponent
}
export default updateComponent
