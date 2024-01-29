import React, { Component } from 'react'
import axios from 'axios'
class PostComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             post : [],
             error : ""
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({post:response.data})
        })
        .catch((error) => {
            this.setState({error : "Error encountered"})
        })
    }
    render() {
        const {post,error} = this.state
        return (
            <div>
                List of posts{
                    post.map(post =>{return <div key={post.id}>{post.title}</div>})
                }
                {error?<div>{error}</div>:null}
            </div>
        )
    }
}

export default PostComponent
