import React from "react"
import "../styles/RecommendCard.css"


function RecommendCard(props) {
    console.log(props.anime);
    return (
        <div className="recommendcard__wrapper">
             <div className="recommendcard">
                <div className="recommendcard__image">
                    <img src={props.img} />
                    
                </div>
                <div className="recommendcard__details">
                <p>{props.anime}</p>
                <p>{props.title}</p>
                <p>{props.price} $</p>
                </div>
            </div>
        </div>
       
        
        
    )
}

export default RecommendCard;