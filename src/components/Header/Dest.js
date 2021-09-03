import React, { Component } from 'react'

class Dest extends Component {
    render() {
        return (
            <span>
                <a href = {this.props.place}>
                    <span style={{padding: 15}}>{this.props.location}</span>
                </a>
        
            </span>
        )
    }
}

export default Dest
