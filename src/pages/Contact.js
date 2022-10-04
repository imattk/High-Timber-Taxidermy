
import {React, useRef, useEffect} from 'react'
import './Contact.css'
import { gsap } from 'gsap'
import elkbg from "../Images/b&w-deer.jpg"


 function Contact() {

    const Contact = useRef()
    const elkbackground = useRef()

    useEffect(()=>{
        gsap.from(Contact.current,
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
          gsap.to(elkbackground.current, {
            duration: 6,
            delay: 5,
            x: "-400%",
            ease: 'power2.easeInOut'
          })
        },[])
  return (
    <div>
        <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
            <div className='contact-container' ref={Contact} >
            <h1 className='contact-title'>Contact High Timber</h1>
            <hr></hr>
            <h3>Hours of opperations vary</h3> 
            <p className='contact-text'>For your convienence Drop off is usually available Monday through Saturday at varying times. Call to set up a time for drop off of your harvested animal. If picking up finished product, we will contant you for times available for pickup. Completion of your item(s) can vary due to certain circumstances, but know that <em>High Timber Taxidermy</em> is working hard to ensure that your trophy is completed in a timely manner.  </p>
            <h4 className='contact1 by'>Contact by Phone or email to set up an appointment</h4>
            <h1 className='contact1'>Phone: (303) 803-3864</h1>
            <h1 className='contact1'>Email: TheHighTimberTaxidermist@Gmail.com</h1>
            <h1 className='contact1'>Concord, CA</h1>
            </div>
    </div>
  )
  }

export default Contact
