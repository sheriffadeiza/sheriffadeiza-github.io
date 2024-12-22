import React from 'react'
import './intro.css'
import Github from '../../../img/github.png';
import LinkedIn from '../../../img/linkedin.png';
import Instagram from '../../../img/instagram.png'
import { themeContext } from '../../../context';
import { useContext } from 'react';


const Intro = () => {
 
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span  style={{color: darkMode? 'white' : ''}}>Hy! I Am</span>
                <span >Hassan Sheriff</span>
                <span style={{color: darkMode? 'white' : ''}}>Frontend Developer with high level of experience
                    in web designing and development, producting the
                     quality work
                </span>
                </div>
                <button className="button i-button">Hire me</button>
               <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
               </div>

       
        

         <div className='blur' style={{background: "rgb(238 210 255)"}}>

         </div>
         <div className="blur" style={{background: '#C1F5FF', 
         top: '17rem', width: '21rem', height: '11rem', left:'-9rem'}}>

         </div>
       
        </div>
    </div>
  )
}

export default Intro