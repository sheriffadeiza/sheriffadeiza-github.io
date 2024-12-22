import React, { useRef } from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import Services from '../services/Services'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Testimonial from '../Testimonial/Testimonial'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from "react-icons/fa";



function Navbar() {

  const navRef = useRef();
         const showNavbar = () => {
              navRef.current.classList.toggle("responsive_nav");
         }
  return (
<div className="n-wrapper" id='Navbar'>
    <div className="n-left"> 
    <div className="n-name">BEJberg</div>
    <Toggle/>
    </div>
    <div className="n-right"  >
    <nav ref={ navRef }>
        <ul style={{listStyleType:'none'}}>


            <Link spy={true}  to='Navbar' smooth={true}>
            <li>Home</li>
            </Link>
            <Link spy={true}  to='Services' smooth={true}>
            <li>Services</li>
            </Link>
           <Link spy={true}  to='Experience' smooth={true}>
            <li>Experience</li>
            </Link>
            <Link spy={true}  to='Portfolio' smooth={true}>
            <li>Portfolio</li>
            </Link>
            <Link spy={true}  to='Testimonial' smooth={true}>
            <li>Testimonials</li>
            </Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
       </ul>
       <Link spy={true}  to='Contact' smooth={true}>
    <button className='button n-button'>
      Contact 
    </button>
    </Link>
 </nav>
 <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
    
    </div>
</div>
  )
}

export default Navbar;
