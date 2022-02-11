import React from 'react'
import { useDataLayerValue } from '../DataLayer';
import Subtotal from './Subtotal';
import '../styles/Checkout.css'
import CheckoutProducts from './CheckoutProducts';


function Checkout() {
    const [{basket, user}, dispatch] = useDataLayerValue();
    return (
        <div className="checkout__page">
            <div className="checkout__header">
                <h2 className="checkout__title">YOUR CART</h2>
            </div>

            <div className="checkout">
                <div className="checkout__left">
                    
                     {basket.map(item => (
                         <CheckoutProducts 
                         id={item.id}
                         title={item.title}
                         image={item.image}
                         price={item.price}
                         description={item.description}
                         />
                     ))}
                    
                    
                </div>
                {basket[0] != null && (
                <div className="checkout__right">
                        <Subtotal />
                </div>
                )}
            </div>
            
            
        </div>
    )
}

export default Checkout
