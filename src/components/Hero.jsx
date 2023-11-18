import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">

            {/* Left Side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                    initial = {{y: "2rem", opacity: 0}}
                    animate={{y:0, opacity:1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    
                    
                    >
                    <h1>Connecting <br /> People and <br /> Healthcare</h1>
                    </motion.h1>
                </div>



                <div className="flexColStart hero-des">
                    <span className="secondaryText"> A bridge between people and healthcare</span>
                    <span className="secondaryText">Efficient solution for an efficient society</span>
                </div>

                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25} />
                    <input type="text"  />
                    <button className="button">Search</button>
                </div>

                <div className="flexCenter stats">

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start = {8800} end = {9000} duration = {4}/>
                            <span>+</span>
                        </span>
                        <span className = "secondaryText">Patients affected</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start = {1950} end = {2000} duration = {4}/>
                            <span>+</span>
                        </span>
                        <span className = "secondaryText">No HC Access</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start = {950} end = {1000} duration = {4}/>
                            <span>+</span>
                        </span>
                        <span className = "secondaryText">Total Deaths</span>
                    </div>



                </div>

          



            </div>

            {/* Right Side */}
            <div className="flexCenter hero-right">
                <motion.div
                initial={{x: "7rem", opacity:0}}
                animate={{x: "0", opacity:1}}
                transition={{
                    duration: 2,
                    type: "spring"
                }}
                className="image-container">
                    <img src="./hero-image.jpg" alt="" />
                    </motion.div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero