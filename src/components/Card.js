import React from 'react'
import {useDataLayerValue} from "../DataLayer";
import { Link} from 'react-router-dom';
function Card(props) {
    const [state, dispatch] = useDataLayerValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                price: props.price,
                description: props.desc,
            },
        });
    };
    return (
        <div className="card__wrapper">
            
           <div className="card">
           
                <div className="card__image">
                <Link to={`/displayProduct/${props.itemNo}/${props.title}`}>
                <img src={props.img} />
                </Link>  
                </div>
                         
                <ul className="buy__button">
                <li> <a  className="buy-btn fa" onClick={addToBasket} >Buy Now</a> </li>
                </ul>
                <div className="details">
                    <h2>{props.title}<span className="series">{props.desc}</span> </h2>
                </div>
           </div>
           
        </div>
    )
}

export default Card
