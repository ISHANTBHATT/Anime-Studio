import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import '../styles/CheckoutProducts.css'
import { useDataLayerValue } from '../DataLayer';
import { Link} from 'react-router-dom';

function CheckoutProducts(props) {

    const [{basket, user}, dispatch] = useDataLayerValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
                id: props.id,
        })
    }
    return (
        <div className="checkoutProducts">

        <Link to={`/displayProduct/${props.id}/${props.title}`}>
            <img className="checkoutProducts__image" src={props.image} />
        </Link>
            <div className="checkoutProducts__info">

                <p className="checkoutProducts__title">{props.title}</p>
                <p className="checkoutProducts__title">{props.description}</p>
                <p className="checkoutProducts__price">
                    <strong>${props.price}</strong>
                </p>
            </div>
            {!props.hideButton && (
                    // <button onClick={removeFromBasket}>Remove from Basket</button>
                    <CloseIcon onClick={removeFromBasket} />
                )}
        </div>
    )
}

export default CheckoutProducts
