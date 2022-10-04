import {React, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './home.css'
import elk1 from '../Home-Images/b&w-deer.jpg'
import { gsap } from 'gsap'


  
   

function Home() {  
    const loader1 = useRef()
    const loader2 = useRef()
    const content = useRef()
    const titleText = useRef()
    const img1 = useRef()
    const exButton = useRef()
    const links = useRef()
    const overlayMain = useRef()
    const overlayText = useRef()

    const navigate = useNavigate();

  const aboutClick = () => {
        navigate('/about');
  }
  
    useEffect(()=>{ 

                
          gsap.to(overlayText.current, {
            duration: 5,
            delay: .3,
            opacity: 0,
            y: -60,
            ease: 'power2.easeInOut'
          })
        
          gsap.to(overlayMain.current, {
            duration: 6,
            delay: 2,
            opacity: -1,
            top: "-400%",
            ease: 'power2.easeInOut'
          })

            gsap.to(loader1.current,
            {
                x: 800,
                duration: 30, 
                ease: "power2.inOut"
            })

            gsap.to(loader2.current,
            {
                duration: 30, 
                x: -800,
                ease: "power2.inOut",
                
            })
            gsap.from(content.current,
                {
                   opacity: -1,
                   delay: 2,
                   duration: 1,
                   y: 30000,
                   ease: "power2,inOut"
                })
            gsap.from(img1.current,
                {
                   opacity: 0,
                   delay: 2,
                   duration: 4,
                   ease: "power2,inOut"
                })
          
            gsap.from(titleText.current,
                {
                   opacity: -1,
                   delay: 2,
                   duration: 2,
                   x: -30000,
                   ease: "power2,inOut"
                })
            gsap.from(exButton.current,
                {
                   
                   opacity: -1,
                   duration: 3,
                   x: -300000,
                   ease: "power2,inOut"
                })
            gsap.from(links.current,
                {
                   opacity: -1,
                   delay: 2,
                   duration: 2,
                   y: 30000,
                   ease: "power2,inOut"
                })
            

    },[])
    
  return (
    <>
    <div  ref={overlayMain} className="overlay">
        
        <span ref={overlayText} className='overlay-text'>Adventure into the <strong>High Timber</strong></span>
    </div>
    <div  className="container">
        
        <div className="loader">
        <h1 ref={loader1} >HIGH TIMBER</h1>
        <h2 ref={loader2} >TAXIDERMY</h2>
        </div>
        
       
         <div className="wrapper">
            
            <div  className="content">
                <div ref={content}>
                <div className="h1">
                    <h1>HIGH TIMBER</h1>
                </div>
                <div className="h1 h1-bottom">
                    <h1 >TAXIDERMY</h1>
                </div>
                </div>
                <p className='text-bottom' ref={titleText}>Professional taxidermy service providing life-like representation of your trophy. helping you to relive your memory of the hunt, the adventure, the experience and the feeling. </p>
                <a ref={exButton} onClick={aboutClick} >Explore High Timber</a>
                <div className="social">
                    <ul ref={links}>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.twitter.com/">Twitter</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                    </ul>
                </div>

            </div>

            
            <div className="img">
                <div className="subimg two">
                    <img ref={img1} src={elk1} alt="elk face"/>
                </div>
               
            </div>
        </div> 
    </div>
    </>
  )
}

export default Home
