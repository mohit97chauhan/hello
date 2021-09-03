import axios from 'axios'
import React, { Component } from 'react'


class Robot extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             allPost: []
        }
    }
    
    getPostData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
            this.setState({
                allPost: posts.data
            })
        })
    }

    render() {
        return (
            <div>
                <button title="All Post" onClick={this.getPostData}>Click</button>
            {
                this.state.allPost.map(item => <div>{item.title}</div>)
            }
            </div>
        )
    }
}

export default Robot
