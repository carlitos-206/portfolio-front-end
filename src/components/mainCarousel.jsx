import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { techList } from "./images/techList.js"
import shuffle from './globalFunctions/randomTechList.js';

// This function holds the center slideshow of imgs in the site
// It shuffles the array on reload
// it then loops infinately by using bootstrap carrusul
export default function MainSlideShow() {
  let randomIdx = shuffle(techList) 
  return (
    <section className='mainCarousel-section'>
      <section className='mainCarousel-container'>
        <Carousel fade>
          {
            randomIdx.map((item, idx)=>{
              return(
                <Carousel.Item interval={1000} key={idx}>
                  <img 
                    src={item}
                    style={{
                      width: '50px',
                      height:'50px',
                      // borderRadius: '5%',
                      padding:'10%'
                    }}
                    alt="carousel_img"
                    />
                </Carousel.Item>
              )
            })
          }
        </Carousel>
      </section>
    </section>
  )
}
