import React, { Component } from 'react'
import Card from './Header/Card'

const Space=[
    {heading:   "mars" , text: " may look hot, but don't let its color fool you -- Mars is actually pretty cold! In orbit, Mars is about 50 million miles farther away from the Sun than Earth. That means it gets a lot less light and heat to keep it warm.", image: "imar.jpg" },
    {heading:   "jupitar" , text: " The temperature in the clouds of Jupiter is about minus 145 degrees Celsius (minus 234 degrees Fahrenheit). The temperature near the planet's center is much, much hotter. The core temperature may be about 24,000 degrees Celsius (43,000 degrees Fahrenheit).",image: "mbar.jpg" },
    {heading:   "saturn" , text: " Earth is one special planet. It has liquid water, plate tectonics, and an atmosphere that shelters it from the worst of the sun's rays. ... The fact that Earth hosts not just life, but intelligent life, makes it doubly unique.",image: "Saturn.jpg" },
    {heading:   "mercury" , text: " Earth is one special planet. It has liquid water, plate tectonics, and an atmosphere that shelters it from the worst of the sun's rays. ... The fact that Earth hosts not just life, but intelligent life, makes it doubly unique.",image: "mercury.jpg" },
    {heading:   "venus    " , text: " Earth is one special planet. It has liquid water, plate tectonics, and an atmosphere that shelters it from the worst of the sun's rays. ... The fact that Earth hosts not just life, but intelligent life, makes it doubly unique.",image: "venus.jpg" },
    {heading:   "earth" , text: " Earth is one special planet. It has liquid water, plate tectonics, and an atmosphere that shelters it from the worst of the sun's rays. ... The fact that Earth hosts not just life, but intelligent life, makes it doubly unique.",image: "Earth.jpg" },
]

export class CardGrow extends Component {
    render() {
        return (
            <div style={{
                flex: 1,
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                <div>{
                Space.map(item => <Card key={item.title}  heading= {item.heading} text={item.text} image={item.image}/>)
            }
            
            </div>
                
            </div> 
        )
    }
}

export default CardGrow
