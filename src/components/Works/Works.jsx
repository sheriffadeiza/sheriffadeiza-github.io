import React from 'react'
import './works.css' 
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import { themeContext } from '../../context';
import { useContext } from 'react';


const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="works">
    {/* left side */}
    <div className="awesome">
    <span style={{color: darkMode? 'white' : '' }}>Works for All these</span>
    <span>Brands & Clients</span>
    <span style={{color: darkMode? 'white' : ''}}>
        Worked on a Real Estate website frontend view
        <br/>
        Worked on an E-commerce site,
        https://frontend-ecommerceclothing.vercel.app/
        <br />
        Worked on a Login page that allows only 4 users login using javascript
        <br /> 
        Worked on a Crypto app,
        https://evolve2p-web-nine.vercel.app/
        <br/>
        Worked on a Football app,
        https://project-neon-rho.vercel.app/

    </span>   
    <button className='button s-button'>Hire me</button> 
    <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
    <div className='blur s-blur1' style={{background: "#C1F5FF"}}></div>
    </div>
    {/*right side*/}
    <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
 

   </div>
  )
}

export default Works