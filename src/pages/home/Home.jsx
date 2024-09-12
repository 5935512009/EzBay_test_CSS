import React from 'react'
import Hero from '../../components/hero/Hero'
import './home.css'
import { VscRecord } from "react-icons/vsc";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineApartment } from "react-icons/md";
import { FaHandsHolding } from "react-icons/fa6";
function Home() {
  return (
    <div className='home'>
      <div className='home-top'>
        <Hero/> 
      </div>
      <div className='home-middle'>
        <div className='home-middle-head'>
          <h3>Our Clients</h3>
        <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='home-middle-list'>
          <VscRecord size={40}/>
          <AiFillCalendar size={40}/>
          <AiFillFlag size={40}/>
          <AiFillLinkedin size={40}/>
          <AiOutlineComment size={40}/>
          <AiOutlineDashboard size={40}/>
          <AiOutlineDatabase size={40}/>
        </div>
        <div className="home-middle-head">
          <h3>Manage your entire community in a single system</h3>
          <p>Who is Nextcent suitable for?</p>
        </div>
        
      </div>
      <div className='home-bottom'>
        <IoIosPeople size={40}/>
        <MdOutlineApartment size={40}/>
        <FaHandsHolding size={40}/>
        </div>
    </div>
  )
}

export default Home
