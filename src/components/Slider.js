import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import "../styles/Slider.css"
import itemList from './ItemList';
// import {Container , Card} from "react-bootstrap"
export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear"
    };
    return (
      <Slider {...settings}>
        {itemList.map((item) => (
         <Card
        id={item.id}
        img={item.img}
        title={item.title}
        desc={item.description}
        price={item.price}
        />
      ))}
      </Slider>
    );
  }