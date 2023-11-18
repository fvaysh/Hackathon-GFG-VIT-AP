import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            
            <div className="flexColStart c-left">
                <span className="orangeText">Emergency</span>
                <span className="primaryText">Meet Initiation</span>
                <span className="secondaryText">This emergency section can be useful to initiate a call (video or an audio) depending on the level of emergency and get immediate first aid or healthcare service.
                </span>
                
                <dix className="flexColStart contacModes">

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size = {25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Voice Call</span>
                                    <span className = "secondaryText">[Nearest Doctor Search]</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size = {25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">Video Call</span>
                                    <span className = "secondaryText">[Nearest Doctor Search]</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size = {25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">EMR</span>
                                    <span className = "secondaryText">[Nearest EU Search]</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Book Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size = {25}/>

                                </div>
                                <div className="flexColStart detail">
                                    <span className = "primaryText">ECR</span>
                                    <span className = "secondaryText">[Nearest Ambulance Search]</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Book Now</div>
                        </div>
                    </div>
                </dix>

            </div>


            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>


        </div>
    </section>
  )
}

export default Contact