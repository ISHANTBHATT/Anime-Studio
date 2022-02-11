import React from 'react'
import "../styles/Body.css"
import Items from './Items'
import {images, images2} from "./Images"

function Body() {
    return (
<div>
    <div id="container">
    {images.map((image) => (
         <Items
        id={image.id}
        img={image.img}
        img2={image.img2}
        img3={image.img3}
        img4={image.img4}
        img5={image.img5}
        img6={image.img6}
        />
      ))}
  </div>
  <div id="container">
    {images2.map((image) => (
         <Items
        id={image.id}
        img={image.img}
        img2={image.img2}
        img3={image.img3}
        img4={image.img4}
        img5={image.img5}
        img6={image.img6}
        />
      ))}
  </div>

     <div >
       <img className="home__image d-block w-100" src="" data-aspectratio="2.5945945945945947" data-sizes="auto" alt="" data-srcset="//cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_180x.jpg?v=1614092843 180w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_360x.jpg?v=1614092843 360w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_540x.jpg?v=1614092843 540w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_720x.jpg?v=1614092843 720w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_900x.jpg?v=1614092843 900w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1080x.jpg?v=1614092843 1080w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1296x.jpg?v=1614092843 1296w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1512x.jpg?v=1614092843 1512w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1728x.jpg?v=1614092843 1728w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1944x.jpg?v=1614092843 1944w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2160x.jpg?v=1614092843 2160w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2376x.jpg?v=1614092843 2376w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2592x.jpg?v=1614092843 2592w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2808x.jpg?v=1614092843 2808w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_3024x.jpg?v=1614092843 3024w" sizes="1519px" srcset="//cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_180x.jpg?v=1614092843 180w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_360x.jpg?v=1614092843 360w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_540x.jpg?v=1614092843 540w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_720x.jpg?v=1614092843 720w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_900x.jpg?v=1614092843 900w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1080x.jpg?v=1614092843 1080w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1296x.jpg?v=1614092843 1296w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1512x.jpg?v=1614092843 1512w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1728x.jpg?v=1614092843 1728w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_1944x.jpg?v=1614092843 1944w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2160x.jpg?v=1614092843 2160w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2376x.jpg?v=1614092843 2376w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2592x.jpg?v=1614092843 2592w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_2808x.jpg?v=1614092843 2808w, //cdn.shopify.com/s/files/1/0014/2648/9388/files/Slider_Desktop_2_2000x500_sots_8beec41d-0d2b-45d9-b844-f3bd0c103180_3024x.jpg?v=1614092843 3024w"></img>
     </div>
     <div>
       
     </div>
</div>
    )
}

export default Body
