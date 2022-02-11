import React from 'react'
import "../styles/ProductLayout.css"
import {images,images2} from "./Images"
import Header from './Header';
import ProductTopBar from './ProductTopBar';
import Footer from "./Footer"
import ProductContainer from './ProductContainer';
import SideBar from './SideBar';
function ProductLayout(props) {
    const product = images.find(x => Number(x.id) === Number(props.match.params.id)) || images2.find(x => Number(x.id) === Number(props.match.params.id)) ;
    console.log(product);
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
                <div className="ProductPage__row">
                <ProductContainer 
                    img={product.img}
                    title={product.title}
                    desc={product.description}
                    price={product.price}

                />
                <ProductContainer 
                    img={product.img2}
                    title={product.title2}
                    desc={product.description}
                    price={product.price}

                />
                </div> 

                <div className="ProductPage__row">
                <ProductContainer 
                    img={product.img3}
                    title={product.title3}
                    desc={product.description}
                    price={product.price}

                />
                <ProductContainer 
                    img={product.img4}
                    title={product.title4}
                    desc={product.description}
                    price={product.price}

                />
                </div>
                
                <div className="ProductPage__row">
                <ProductContainer 
                    img={product.img5}
                    title={product.title5}
                    desc={product.description}
                    price={product.price}

                />
                <ProductContainer 
                    img={product.img6}
                    title={product.title6}
                    desc={product.description}
                    price={product.price}

                />
                </div>
            </div>

         </div>
         <div className="Product__footer">
             <Footer />
         </div>
         
            
        </div>
    )
}

export default ProductLayout
