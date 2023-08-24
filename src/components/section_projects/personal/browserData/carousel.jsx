import React from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselBuilder({images}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="custom_carousel_bd">
      <Slider {...settings}>
        {
          images.map((image, index) => { 
            return(
              <div className="conatinerCara" key={index}>
                <div className="carouselImageContainer slide-item transition-all" id={index}>
                  <img className="carouselImg" src={image.img} alt="carouselImage" />
                  <p className="carousel_focus_text">Focus: {image.focus}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}