import React, { useState, useRef, useEffect } from 'react'
import '../pages/Gallery.css'
import {GalleryData} from '../pages/GalleryData'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import elkbg from "../Images/b&w-deer.jpg"
import { gsap } from 'gsap'


function Gallery() {
const elkbackground = useRef()
const imgs = useRef()

const [modal, setModal] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState('')

const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc)
    setModal(true)
}

useEffect(()=>{
    gsap.from(imgs.current,
        {
           opacity: -4,
           delay: 1.5,
           duration: 4,
           y: -500,
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
    <>
         <div>
            <img className='background-img' src={elkbg} ref={elkbackground} />
        </div>
    <div className={modal? "modal open" : "modal"}>
        <img src={tempImgSrc}/>
        <AiOutlineCloseCircle onClick={()=> setModal(false)}/>
    </div>
    <div ref={imgs}>
    <div className='gallery1'>
        {GalleryData.map((item, index)=>{
            return(
                
                <div className='gallery-img' key={index} onClick={()=> getImg(item.imgSrc) } alt="taxidermy image">
                    <img src={item.imgSrc} style={{width: '100%'}} loading='lazy' />
                </div>
                
            )
        })}
    </div>
    </div>
    </>
  )
}

export default Gallery
