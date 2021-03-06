import React from 'react';
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../Reducer';
import { useDataLayerValue } from '../DataLayer';
import "../styles/Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useDataLayerValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
             <>
                <p style={{marginBottom:"8px" }}>
                  Subtotal ({basket?.length} items): <strong>{value}</strong>
                </p> 
                <small className="subtotal__gift">
                  <input type="checkbox" />
                  This order contains a gift
                </small>
            </>      
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"} 
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>  
        </div>
    );
}

export default Subtotal
