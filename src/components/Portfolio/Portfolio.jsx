import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Schoolweb from '../../img/Schoolweb.png'
import Socialbook from '../../img/Socialbook.png'
import Fportfolio from '../../img/fportfolio.png'
import Musicapp from '../../img/musicapp.png'
import 'swiper/css'   
import { themeContext } from '../../context';
import { useContext } from 'react';

const Portfolio = () => {
   const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
       
       { /* heading */ }
       <span style={{color: darkMode? 'white' : ''}}>Recent Projects </span>
       <span>Portfolio </span> 


       { /* slider */} 
         <Swiper spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          className='portfolio-slider'

         >
             <SwiperSlide>
                <img src={Schoolweb} alt="" />
            </SwiperSlide>  
             <SwiperSlide>
                <img src={Socialbook} alt="" />
            </SwiperSlide>  
             <SwiperSlide>
                <img src={ Musicapp } alt="" />
            </SwiperSlide>  
             <SwiperSlide>
                <img src={ Fportfolio} alt="" />
            </SwiperSlide>  
              
         </Swiper>

    </div>
  )
}

export default Portfolio