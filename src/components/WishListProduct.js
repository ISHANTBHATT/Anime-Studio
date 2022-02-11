import React from 'react'
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDataLayerValue } from '../DataLayer';
function WishListProduct(props) {
    const [{fav}, dispatch] = useDataLayerValue();
    function favRemove() {
        dispatch({
            type: 'REMOVE_FROM_Fav',
                id: props.id,
        });
    }
    return (
        <div className="WishProduct__container">
                    <div className="WishProductImage__container">
                        <img className="WishProduct__image" src={props.img}/>
                        <div className="cancel__icon">
                            <span><CancelIcon className="cancel" onClick={favRemove} /></span>  
                        </div>
                        
                    </div>
                    <div className="WishProduct__details">
                        <p>{props.title}</p>
                        <p>{props.desc}</p>
                        <p className="checkoutProducts__price">
                        <strong>${props.price}</strong>
                        </p>
                        <div className="Add__button">
                            <Button variant="contained" className="Add__To__Basket">
                             ADD TO CART
                            </Button>
                        </div>
                        
                    </div>
        </div>
    )
}

export default WishListProduct
