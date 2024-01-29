import React, { useEffect, useState } from 'react'
import axios from 'axios'
function DataFetchHook() {
    const [post,setPost] = useState([])

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(e => console.log(e))
    },[])
    return (
        <div>
            <ul>
            {
                post.map((post)=>{return <li key={post.id}>{post.title}</li>})
            }
            </ul>
        </div>
    )
}

export default DataFetchHook
