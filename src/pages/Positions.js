
import React, {useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './About.css'
import elkbg from "../Images/b&w-deer.jpg"
import Top from '../Images/top.png'
import Bottom from '../Images/bottom.png'
import Turns from '../Images/turns.png'
import Full from '../Images/full.png'
import Simi from '../Images/simi.png'
import Upright from '../Images/upright.png'




function Positions() {
  
  const elkbackground = useRef()
  const img1 = useRef()
  const img2 = useRef()
  const img3 = useRef()
  const img4 = useRef()
  const img5 = useRef()
  const img6 = useRef()
  const posTitle = useRef()

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
      opacity: -1,
      ease: 'power2.easeInOut'
    })
    gsap.to(elkbackground.current, {
      duration: 6,
      delay: 5,
      x: "-400%",
      ease: 'power2.easeInOut'
    })
    gsap.from(img1.current, {
        duration: 2,
        delay: 5.3,
        x: "-400%",
        ease: 'power2.easeInOut'
      })
      gsap.from(img2.current, {
        duration: 2,
        delay: 5.5,
        x: "-400%",
        ease: 'power2.easeInOut'
      })
      gsap.from(img3.current, {
        duration: 2,
        delay: 5,
        x: "-400%",
        ease: 'power2.easeInOut'
      })
      gsap.from(img4.current, {
        duration: 2,
        delay: 6.1,
        x: "-400%",
        ease: 'power2.easeInOut'
      })
      gsap.from(img5.current, {
        duration: 2,
        delay: 5.9,
        x: "-400%",
        ease: 'power2.easeInOut'
      })
      gsap.from(img6.current, {
        duration: 2,
        delay: 5.7,
        x: "-600%",
        ease: 'power2.easeInOut'
      })
      gsap.from(posTitle.current, {
        duration: 2,
        delay: 4,
        x: "-400%",
        ease: 'power2.easeInOut',
        opacity: -1
      })

  },[])

  return (
    <div>
      <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
    <div className='position-container'>
        <h1 className='pos-title' ref={posTitle}>Shoulder Mount Position Examples</h1>
        <div className='img-container'>
        <img src={Upright} ref={img1} />
        <img src={Simi} ref={img2} />
        <img src={Full} ref={img3} />
        <img src={Top} ref={img4} />
        <img src={Turns} ref={img5} />
        <img src={Bottom} ref={img6} />
        </div>
    </div>
    
    
    </div>
  )
}

export default Positions
