import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../../img/resume.pdf'
import { themeContext } from '../../context';
import { useContext } from 'react';


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services" id='Services'>

    {/* left side */}
    <div className="awesome">
    <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
    <span>services</span>
    <span style={{color: darkMode? 'white' : ''}}>
        I am a frontend developer and you can higher me for ur visual website
        <br/>
        I do any form of website design using html,css,javascript,bootstrap and react.js
    </span>
    <a href={Resume} download><button className='button s-button'>Download Cv</button></a>
    
    <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
    <div className='blur s-blur1' style={{background: "#C1F5FF"}}></div>
    </div>
    {/* right side */}
    <div className="cards" >
      
      <div style={{left:'14rem' }}>
        <Card 
        emoji = {HeartEmoji}
        heading = {'Design'}
        detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
        />
      </div>

           {/*second card*/}
           <div style={{ top:'12rem' ,left:'-4rem' }}>
        <Card
        emoji = {Glasses}
        heading = {'Developer'}
        detail = {"Html, Css, Javascript, React"}
        />
      </div>
      {/*third card*/}
      <div style={{ top: '19rem', left:'12rem' }}>
        <Card
        emoji = {Humble}
        heading = {'Ui/Ux '}
        detail = {"AS a frontend developer, I also got my self into a little of Ui/Ux design in helping me choose a great view for my website "}
        />
      </div>
    </div>
   </div>
  )
}

export default Services