import React, { Component } from 'react'
import NavItem from './Header/NavItem'

const NAV_ITEM = [
    {title: 'Home', link: 'www.google.com'},
    {title: 'News', link: 'www.facebook.com'},
    {title: 'Contact', link: 'www.google.com'},
    {title: 'About', link: 'www.google.com'},
]

export class Navbar extends Component {
    
    render() {
        return (
            <div>
                {
                    NAV_ITEM.map(item => <NavItem key={item.title} title={item.title} link={item.link}/>)
                }
            </div>
        )
    }
}

export default Navbar

