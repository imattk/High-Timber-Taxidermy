
import {React, useRef, useEffect} from 'react'
import {PriceDataAfrican} from './PricesData'
import './Prices.css'
import { gsap } from 'gsap'
import elkbg from "../Images/b&w-deer.jpg"


 function PricesAfricanAndExotics() {

    const naPrice = useRef()
    const elkbackground = useRef()

    useEffect(()=>{
        gsap.from(naPrice.current,
          {
             opacity: -4,
             delay: 1.5,
             duration: 4,
             
             ease: "power2,inOut"
          })
          gsap.from(elkbackground.current, {
            duration: 2,
            delay: 0,
            opacity: 0,
            ease: 'power2.inOut'
          })
          gsap.to(elkbackground.current, {
            duration: 6,
            delay: 2,
            opacity: -1,
            ease: 'power2.easeInOut'
          })
        },[])
  return (
    <div>
        <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
            <div  ref={naPrice} >
            
            {PriceDataAfrican.map((item, index)=>{
                return(
                    <div className='price-container'  key={index}>
                        <h2 className='species-title'>{item.species}</h2>
                        <h3 className='price-list'>Shoulder Mount: {item.shoulder} </h3>
                        <h3 className='price-list'>Lifesize: {item.lifesize}</h3>
                        <h3 className='price-list'>{item.extras? "Mouth Options available" : ""}</h3>
                        <hr></hr>
                    </div>
                )
            })} 
            </div>
            <h1>Call for All Other Species and Quotes</h1>
    </div>
  )
}

export default PricesAfricanAndExotics