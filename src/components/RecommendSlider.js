import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images }from "./AllProduct"
import RecommendCard from "./RecommendCard";
// import "../styles/Slider.css"

export default function RecommendSlider() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      cssEase: "linear"
    };
    
    return (
      <Slider {...settings} style={{marginLeft: "50px", marginRight: "50px"}}>
        {images.map((item) => (
         <RecommendCard
         key={item.id}
        img={item.img[0]}
        title={item.title}
        price={item.price}
        anime={item.anime}
        />
      ))}
      </Slider>
    );
  }