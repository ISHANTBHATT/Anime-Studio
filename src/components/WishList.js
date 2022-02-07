import React from 'react'
import { useDataLayerValue } from '../DataLayer';
import Header from './Header';
import "../styles/WishList.css";
import WishListProduct from './WishListProduct';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NavigatorTopBar from './NavigatorTopBar';
function WishList() {

    const [{fav}, dispatch] = useDataLayerValue();

    return (
        <div className="Wish__list">
        <Header />

        <div className="top__bar">
            <NavigatorTopBar page='WishList' />
        </div>    

     <div className="Wish__content">

        <div className="WishProductPage__list">
             <h1>WISHLIST</h1>
            <div className="WishProductPage__row">
            {fav.map(item => (
                         <WishListProduct
                         id={item.id}
                         img={item.image}
                         title={item.title}
                         desc={item.description}
                         price={item.price}
                        //  itemNo={item.itemNo}
                     />
                     ))}
            </div> 

            
        </div>

     </div>
        
    </div>
    )
}

export default WishList
