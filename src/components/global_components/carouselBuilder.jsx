import React from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselBuilder({images}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    autoplay: true,
  };

  return (
    <div className="carouselContainer">
      <Slider {...settings}>
        {
          images.map((image, index) => { 
            return(
              <div className="conatinerCara" key={index}>
                <div className="carouselImageContainer slide-item transition-all" id={index}>
                  <img className="carouselImg" src={image.img} alt="carouselImage" />
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}