
import React, {useRef, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { gsap } from 'gsap'
import './About.css'
import img1 from '../Steps-Images/IMG_8569.PNG'
import imgM from '../Images/b&w-deer.jpg'
import img3 from '../Steps-Images/IMG_8568.PNG'
import img4 from '../Steps-Images/IMG_8567.PNG'
import img5 from '../Steps-Images/IMG_8570.PNG'
import img6 from '../Steps-Images/IMG_8571.PNG'
import img7 from '../Steps-Images/IMG_8572.PNG'
import img8 from '../Steps-Images/IMG_8573.PNG'
import img10 from '../Steps-Images/IMG_8575.PNG'
import elkbg from "../Images/b&w-deer.jpg"




function About() {
  const aboutText = useRef()
  const title = useRef()
  const image10 = useRef()
  const image8 = useRef()
  const image7 = useRef()
  const image6 = useRef()
  const image5 = useRef()
  const image4 = useRef()
  const image3 = useRef()
  const imgMain = useRef()
  const image1 = useRef()
  const elkbackground = useRef()
  const positionBtn = useRef()

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
    gsap.from(positionBtn.current, {
      duration: 4,
      opacity: -1,
      x: -20000,
      ease: 'power2.easeInOut'
    })
    gsap.from(image10.current,
      {
         opacity: -1,
         delay: 2,
         duration: 2,
         x: -100,
         ease: "power2,inOut"
      })
        gsap.from(image8.current,
          {
             opacity: -1,
             delay: 4,
             duration: 2,
             ease: "power2,inOut"
          })
          gsap.from(image7.current,
            {
               opacity: -1,
               delay: 5.5,
               duration: 2,
               ease: "power2,inOut"
            })
            gsap.from(image6.current,
              {
                 opacity: -1,
                 delay: 7,
                 duration: 2,
                 ease: "power2,inOut"
              })
              gsap.from(image5.current,
                {
                   opacity: -1,
                   delay: 9,
                   duration: 2,
                   ease: "power2,inOut"
                })
                gsap.from(image4.current,
                  {
                     opacity: -1,
                     delay: 11,
                     duration: 2,
                     ease: "power2,inOut"
                  })
                  gsap.from(image3.current,
                    {
                       opacity: -1,
                       delay: 13,
                       duration: 2,
                       ease: "power2,inOut"
                    })
                      gsap.from(image1.current,
                        {
                           opacity: -1,
                           delay: 15,
                           duration: 2,
                           ease: "power2,inOut"
                        })
                        gsap.from(imgMain.current,
                          {
                             opacity: -1,
                             delay: 19,
                             duration: 2,
                             ease: "power2,inOut"
                          })
                        gsap.from(aboutText.current, 
                           {
                             opacity: -1,
                             delay: 2,
                             y: 400,
                             duration: 2,
                             ease: "power2,inOut"
                           })
                           gsap.from(title.current, 
                              {
                                opacity: -1,
                                delay: 2,
                                y: 400,
                                duration: 2,
                                ease: "power2,inOut"
                              })

  },[])

  const navigate = useNavigate();

   const PositionClick = () => {
         navigate('/Positions');
   }

  return (
    <div>
      <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
    
    <div className='container-about'>
         <h1 className='about-title' ref={title}>About High Timber</h1>  
              <img className='about-img' src={img10} ref={image10} />
     
              <img className='about-img' src={img8} ref={image8} alt="High Timber Working on Deer" />
              <img className='about-img' src={img7} ref={image7} alt="High Timber Working on Deer" />
              <img className='about-img' src={img6} ref={image6} alt="High Timber Working on Deer" />
              <img className='about-img' src={img5} ref={image5} alt="High Timber Working on Deer" />
              <img className='about-img' src={img4} ref={image4} alt="High Timber Working on Deer" />
              <img className='about-img' src={img1} ref={image1} alt="High Timber Working on Deer" />
              <img className='about-img' src={img3} ref={image3} alt="High Timber Working on Deer" />
              <img className='about-img' src={imgM} ref={imgMain} alt="High Timber Working on Deer" />
      
    </div>
    <a className='form-btn' onClick={PositionClick} ref={positionBtn}>Explore Form Positions</a>
         <section className='about-text' ref={aboutText}>
         <p>
         High Timber Taxidermy started in 2018 as a Professional taxidermy business. Owner Matthew Krebs stated his taxidermy journey in 2014 working for some of the top taxidermy businesses in Denver, Colorado. He is an avid hunter and expert meat cutter and wanted to learn to mount his own trophies. He started at the bottom, becoming a flesher and preparing the capes for the tanning process. He was always asking questions and open to feedback. He began mounting his own harvested animals that he would get during the hunting season and absorbed all of the feedback and tips along the way. While his services began to grow, he quickly gained the skills needed and began to develop a customer base. He provides excelent mounts for many prestigious customers, many of whom are repeat customers year after year, because he takes his time making sure every mount is top quality, not skipping any steps or taking any shortcuts, and ensuring that the customer will be proud to display their trophy for a lifetime. 
         </p>
         </section>
    
    </div>
  )
}

export default About
