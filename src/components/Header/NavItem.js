import React, { Component } from 'react'

class NavItem extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <span style={{padding: 10}}>{this.props.title}</span>
            </a>
        )
    }
}

export default NavItem
