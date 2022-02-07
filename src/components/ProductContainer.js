import React, { useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useDataLayerValue} from "../DataLayer";
import { Link} from 'react-router-dom';
function ProductContainer(props) {

    let [selected, setSelcted]= useState(false);
    const [{fav}, dispatch] = useDataLayerValue();

    function favAdd() {
        selected = !selected;
        setSelcted(selected);
        dispatch({
            type: 'ADD_TO_Fav',
            item: {
                id: props.id,
                title: props.title,
                image: props.img,
                price: props.price,
                description: props.desc,
            },
        });
    }

    function favRemove() {
        selected = !selected;
        setSelcted(selected);
        dispatch({
            type: 'REMOVE_FROM_Fav',
                id: props.id,
        });
    }

    return (
        <div className="Product__container">
                    <div className="ProductImage__container">
                    <Link to={`/displayProduct/${props.id}/${props.title}`}>
                        <div>
                        <img className="Product__image" src={props.img}/>
                        </div>
                    </Link>
                        {selected ? <FavoriteIcon className="fav__icon" style={{color:"#fab818"}} onClick={favRemove} /> : <FavoriteBorderIcon className="fav__icon"  onClick = {favAdd}/>}
                    </div>
                    <div className="Product__details">
                        <p>{props.title}</p>
                        <p>{props.desc}</p>
                        <p className="checkoutProducts__price">
                        <strong>${props.price}</strong>
                        </p>
                    </div>
        </div>
    )
}

export default ProductContainer

