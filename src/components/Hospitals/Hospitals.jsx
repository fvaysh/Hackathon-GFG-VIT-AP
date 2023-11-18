import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./Hospitals.css"
import data from'../../utils/slider.json'
import { sliderSettings } from '../../utils/common'
const Hospitals = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Top Recommended</span>
                <span className="primaryText">Nearby</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src= {card.image} alt="Home" />

                                <span className="secondaryText r-price">
                                    <span style={{color : "blue"}}>Rs </span>
                                    <span>{card.price}</span>
                                </span>
                                <span class="primaryText">{card.name}</span>
                                <span class="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>


                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Hospitals

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter r-buttons">
            <button onClick = {()=> swiper.slidePrev()}>&lt;</button>
            <button onClick = {()=> swiper.slideNext()}>&gt;</button>
            
        </div>
    )
}