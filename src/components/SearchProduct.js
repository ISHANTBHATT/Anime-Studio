import React from 'react'
import Header from './Header';
import ProductTopBar from './ProductTopBar';
import Footer from "./Footer"
import ProductContainer from './ProductContainer';
import SideBar from './SideBar';
import {images} from "./AllProduct";
import "../styles/SearchProduct.css"
function SearchProduct(props) {
    const products = images.filter(x => x.anime === (props.match.params.inputValue).toLowerCase());
    return (
        <div className="Product__list">
        <Header />

        
     <div className="Product__content">

        <div className="Productside__bar">
            <SideBar />
        </div>

        <div className="ProductPage__list">
             <ProductTopBar 
              title='something'                 
             />
            <div className="searchedProduct">
                {products.map((product) => (
                    <ProductContainer 
                    img={product.img[0]}
                    title={product.title}
                    desc={product.description}
                    price={product.price}
    
                />
                ))}
            </div> 

            

        </div>

     </div>
     <div className="Product__footer">
         <Footer />
     </div>
     
        
    </div>
    )
}

export default SearchProduct
