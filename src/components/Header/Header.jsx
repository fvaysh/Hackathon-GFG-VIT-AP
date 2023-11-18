import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">

            <img src="" alt="logo" width = {100} />


            <div className="flexCenter h-menu">
                <a href="">AI Chatbot</a>
                <a href="">Scheduler</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                <button className="button">
                <a href="">Sign In</a>
                </button>
            </div>

        </div>
    </section>
  )
}

export default Header