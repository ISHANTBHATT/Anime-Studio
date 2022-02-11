import React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images }from "./AllProduct"
import RecommendCard from "./RecommendCard";
import "../styles/Slider.css"

export default function RecommendSlider() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 10,
      slidesToScroll: 5,
      cssEase: "linear"
    };
    return (
      <Slider {...settings} >
        {images.map((item) => (
         <RecommendCard
        img={item.img[0]}
        />
      ))}
      </Slider>
    );
  }