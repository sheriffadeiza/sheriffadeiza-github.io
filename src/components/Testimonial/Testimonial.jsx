import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilepic1 from "../../img/profile1.jpg";
import profilepic2 from "../../img/profile2.jpg";
import profilepic3 from "../../img/profile3.jpg";
import profilepic4  from "../../img/profile4.jpg"; 
import {Pagination} from  'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
import { themeContext } from '../../context';
import { useContext } from 'react';


const Testimonial = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    const clients = [
        {
            img: profilepic1, 
            review:
        "He is mervelous, his designs are topnotch, hope to work with him more often."
     },

        {
            img: profilepic2, 
            review:
            "He is mervelous, his designs are topnotch, hope to work with him more often."



        },

        {
            img: profilepic3, 
            review:
            "He is mervelous, his designs are topnotch, hope to work with him more often."


        },
    
        { 
            img: profilepic4, 
            review:
            "He is mervelous, his designs are topnotch, hope to work with him more often."



        }

    ]
  return (
    <div className="t-wrapper" id='Testimonial'>
        <div className="t-heading">
            <span>Clients always get</span>
            <span> Exceptional Work</span>
            <span> from me...</span>
            <div className='blur t-blur2' style={{background: "var(--purple)"}}></div>
            <div className='blur t-blur1' style={{background: "skyblue"}}></div>
         </div>
         {/* slider*/}
         <Swiper
         modules={[Pagination]}
         slidesPerView={1}
         pagination={{ clickable: true}}

         >
           {clients.map((client, index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className="testimonial">
                    <img src={client.img } alt="" />
                    <span style={{color: darkMode? 'black' : ''}}>{client.review}</span>
                         </div>
                    

                </SwiperSlide>

            )
           })}
         </Swiper>  


    </div>
  )
}

export default Testimonial