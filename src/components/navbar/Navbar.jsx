import React from 'react'
import { Link  } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {

  return ( 
    <div className='nav'>
        <div className="nav-menu-left">
           <ul className='nav-list'>
                <li>EzBay Follow figma</li>
            </ul> 
        </div>
        <div className="nav-menu-right">
           <ul className='nav-list'>
                <li ><Link>Home</Link></li>
                <li ><Link>Features</Link></li>
                <li ><Link>Community</Link></li>
                <li ><Link>Blog</Link></li>
                <li ><Link>Pricing</Link></li>
                <li> <button className='nav-register'>Register Now</button></li>
            </ul> 
        </div>
            
        
    </div>
  )
}
