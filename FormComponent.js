import React,{Component} from "react";

class FormComponent extends Component{
    constructor(props){
        super();
        this.state = {
            name : "",
            text : "",
            selectvalue : "S"
        }
    }
    change = (event) => {
        this.setState({
            name : event.target.value
        })
    }
    changetext = (event) =>{
        this.setState({
            text : event.target.value
        })
    }
    changeSelect = (event) =>{
        this.setState({
            selectvalue : event.target.value
        })
    }
    Submit = (event) =>{
        alert(`${this.state.name} ${this.state.text} ${this.state.selectvalue}`)
    }
    render(){
        return(
            <form onSubmit={this.Submit}>
                <div><label>Username</label>
                <input type="text" value={this.state.name} onChange={this.change}></input></div>
                <div><label>TextArea</label>
                <textarea value={this.state.text} onChange={this.changetext}></textarea></div>
                <div><select value={this.state.selectvalue} onChange={this.changeSelect}>
                    <option value="S">S</option>
                    <option value="R">R</option>
                </select></div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default FormComponent