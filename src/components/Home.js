import React from 'react'
 import Body from './Body'
import ControlledCarousel from './Carousel'
import "../styles/Home.css"
import SimpleSlider from "./Slider"
function Home() {
    return (
       <div>
            <div className = "home" >
             <ControlledCarousel />
             <Body />
            </div>

            <div className="container mt-5 carousel">
            <SimpleSlider />
            </div>
    </div>
    )
}

export default Home
