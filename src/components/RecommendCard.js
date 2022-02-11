import React from "react"
import "../styles/Slider.css"


function RecommendCard(props) {
    return (
        <div className="container mt-5 carousel">
             <div className="card">
                <div className="card__image">
                    <img src={props.img} />
                </div>
            </div>
        </div>
       
        
        
    )
}

export default RecommendCard;