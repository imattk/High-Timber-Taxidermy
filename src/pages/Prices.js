
import {React, useRef, useEffect} from 'react'
import './Prices.css'
import { gsap } from 'gsap'
import elkBugle from '../Images/elkbugle.png'
import kudu from '../Images/kudu.png'
import stag from '../Images/stag.png'
import {useNavigate} from 'react-router-dom'
import elkbg from "../Images/b&w-deer.jpg"

function Prices() {
   const elk = useRef()
   const ku = useRef()
   const sta = useRef()
   const na = useRef()
   const af = useRef()
   const nz = useRef()
   const htprice = useRef()
  
   const elkbackground = useRef()

   
   const navigate = useNavigate();

   const NaClick = () => {
         navigate('/PricesNorthAmerican');
   }
   const AfClick = () => {
      navigate('/PricesAfricanAndExotics');
   }
   const NzClick = () => {
   navigate('/PricesNewZelandAndOther');
   }

   useEffect(()=>{
        
           gsap.from(elkbackground.current, {
             duration: 2,
             delay: 0,
             opacity: 0,
             ease: 'power2.inOut'
           })
           gsap.to(elkbackground.current, {
             duration: 6,
             delay: 2,
             opacity: -4,
             ease: 'power2.easeInOut'
           })
           gsap.to(elkbackground.current, {
            duration: 6,
            delay: 5,
            x: "-400%",
            ease: 'power2.easeInOut'
          })
            gsap.from(elk.current,
               {
                  opacity: -4,
                  delay: 3,
               
                  duration: 2,
                  ease: "power2,inOut"
               })
            gsap.from(ku.current,
            {
               opacity: -4,
               delay: 3,
               
               duration: 2,
               ease: "power2,inOut"
            })
            gsap.from(sta.current,
                  {
                     opacity: -4,
                     delay: 3,
                     duration: 2,
                     ease: "power2,inOut"
                  })
                  gsap.from(na.current,
                     {
                        
                        delay: 2,
                        duration: 2,
                        x: 4000,
                        ease: "power2,inOut"
                     })
                     gsap.from(af.current,
                        {
                           
                           delay: 2,
                           duration: 2,
                           x: 4000,
                           ease: "power2,inOut"
                        })
                        gsap.from(nz.current,
                              {
                                 
                                 delay: 2,
                                 duration: 2,
                                 x: 4000,
                                 ease: "power2,inOut"
                              })
                              gsap.from(htprice.current,
                                 {
                                    
                                    delay: 2,
                                    duration: 2,
                                    y: -4000,
                                    ease: "power2,inOut"
                                 })

    },[])
  return (
   <>
         <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
    <div className='div-bg' >
    <h1 className='pricelist-title' ref={htprice}>High Timber Taxidermy Price List</h1>
        <div className='species-container'>
        
        <img src={elkBugle} onClick={NaClick} ref={elk} />
        <a className='species-option' ref={na} onClick={NaClick} >North American</a>
        <img src={kudu} ref={ku} onClick={AfClick} />
        <a className='species-option' ref={af} onClick={AfClick} >African and Exotics</a>
        <img src={stag} ref={sta} onClick={NzClick} />
        <a className='species-option' ref={nz} onClick={NzClick} >New Zeland and Others</a>
        </div>
    
      
    </div>
    </>
  )
}
export default Prices
