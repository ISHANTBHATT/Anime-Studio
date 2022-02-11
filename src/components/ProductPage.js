import React,{useState} from 'react'
import { images } from "./AllProduct"
import Header from './Header';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useDataLayerValue} from "../DataLayer";
import '../styles/ProductPage.css'
import SelectButton from './SelectButton';
import NavigatorTopBar from './NavigatorTopBar';
import Footer from "./Footer"
import ReactImageMagnify from 'react-image-magnify';
function ProductPage(props) {
    const product = images.find(x => x.title === props.match.params.title);

    let [selected, setSelcted]= useState(false);
    const [state, dispatch] = useDataLayerValue();
    const [displayImg, setDisplayImg]= useState(product.img[0]);
    function favAdd() {
        selected = !selected;
        setSelcted(selected);
        dispatch({
            type: 'ADD_TO_Fav',
            item: {
                id: product.id,
                title: product.title,
                image: product.img,
                price: product.price,
                description: product.description,
            },
        });
    }

    

    function favRemove() {
        selected = !selected;
        setSelcted(selected);
        dispatch({
            type: 'REMOVE_FROM_Fav',
                id: product.id,
        });
    }

        // const [state, dispatch] = useDataLayerValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: product.id,
                title: product.title,
                image: product.img[0],
                price: product.price,
                description: product.description,
            },
        });
    };


    return (
        <div>
            <Header />
            <div className="ProductTop__bar">
                <NavigatorTopBar page={product.title}/>
            </div>
        <div className="ProductPage">
            
            <div className="ProductPage__left">
                <div className="left__left">
                {product.img.map((image)=> (
                    <img className="ProductPage__sideimg" src={image} onClick={()=> setDisplayImg(image)}/>
                  ))}
                </div>

                <div className="left__right">
                    <img className="ProductPage__image" src={displayImg}/>
                    {/* <ReactImageMagnify {...{
                        smallImage: {
                        alt: '',
                        width: 400,
                        height: 400,
                        src: `${displayImg}`
                      },
                       largeImage: {
                       src: `${displayImg}`,
                       width: 1200,
                       height: 1800
                      }
                      }} /> */}
                </div>
                
            </div>

            <div className="ProductPage__right">
                <div className="right__title">
                    <h1>{product.title} - {product.description}</h1>
                </div>
                <div>
                <p className="right__price">
                        <span>${product.price}</span>
                </p>
                </div>

                <div className="quantity">
                    <p>Quantity:</p>
                    <SelectButton  title='1' option={['2','3','4','5','6', '7','8','9','10','11','12','13', '14','15','16','17','18','19','20']}/>
                </div>
               
                <div className="right__AddtoCart">
                <button type="submit" className="AddToCart" onClick={addToBasket}>ADD TO CART</button>
                </div>

                <div className="right__details">

                <div className="right__shipment">
                    <LocalShippingIcon />
                    <p>Free Delhi Shipping $100+</p>
                </div>

                <div className="right__AddtoFav">
                    {selected ? <FavoriteIcon style={{color:"#fab818"}} onClick={favRemove} /> : <FavoriteBorderIcon className="PP__icon"  onClick = {favAdd}/>}
                    <p>Add to Wishlist</p>
                </div>

                </div>
                
            </div>
            
            
        </div>
        <Footer />
    </div>
    )
}

export default ProductPage
