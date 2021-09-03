import React, { Component } from 'react'
import Dest from './Header/Dest'

const NAVD=[
    {place: 'www.google.com' , location: 'Noida'},
    {place: 'www.google.com' , location: 'Faridabad'},
    {place: 'www.google.com' , location: 'Gurugram'},
]



 export class Destination extends Component {
    render() {
        return (
            <div>{
                NAVD.map(item => <Dest key={item.title}  place= {item.place} location={item.location}/>)
            }
            
            </div>
        )
    }
}
export default Destination