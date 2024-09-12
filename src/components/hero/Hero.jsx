import React from 'react'
import hero_im from '../../assets/hero_img1.png'
import './hero.css'
function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h1> Lessons and insights </h1>
            <h1 className='green'>from 8 years</h1>
            <p>
                Where to grow your business as a photographer: site or social media?
            </p>
            <button> Register</button>
        </div>
        <div className="hero-right">
           <img src={hero_im} alt="hero right not work" /> 
        </div>
    </div>
  )
}

export default Hero
