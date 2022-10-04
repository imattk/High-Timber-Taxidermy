import React, {useState, useEffect, useRef} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import './Navbar.css'
import { IconContext } from 'react-icons'
import {useNavigate} from 'react-router-dom'
import {gsap} from 'gsap'


//rfce
function Navbar() {
  const link1 = useRef()
  const link2 = useRef()
  const link3 = useRef()
  const link4 = useRef()
  const link5 = useRef()

  useEffect(()=>{
        
    gsap.from(link1.current, {
      duration: 2,
      delay: 3,
      y: -200,
      ease: 'power2.inOut'
    })
    gsap.from(link2.current, {
      duration: 2,
      delay: 3.3,
      y: -200,
      ease: 'power2.inOut'
    })
    gsap.from(link3.current, {
      duration: 2,
      delay: 3.6,
      y: -200,
      ease: 'power2.inOut'
    })
    gsap.from(link4.current, {
      duration: 2,
      delay: 3.9,
      y: -200,
      ease: 'power2.inOut'
    })
    gsap.from(link5.current, {
      duration: 2,
      delay: 4.2,
      y: -200,
      ease: 'power2.inOut'
    })
  },)

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = ()=> setSidebar(!sidebar)

  const navigate = useNavigate();

  const aboutClick = () => {
        navigate('/about');
  }
  const homeClick = () => {
    navigate('/');
}
const galleryClick = () => {
    navigate('/gallery');
}
const contactClick = () => {
    navigate('/contact');
}
const pricesClick = () => {
    navigate('/prices');
}

  return (
    
    <div>
    <div className='desktop-view'>
      <ul className='nav-desktop'>
        <li><a onClick={homeClick} ref={link1} >Home</a></li>
        <li><a onClick={aboutClick} ref={link2}  >About</a></li>
        <li><a onClick={pricesClick} ref={link3}  >Prices</a></li>
        <li><a onClick={galleryClick} ref={link4}  >Gallery</a></li>
        <li><a onClick={contactClick} ref={link5}  >Contact</a></li>
      </ul>
    </div>
    <div className='hamburger'>
    <IconContext.Provider value={{color: '#fff'}}>
     <div className='navbar'>
        <Link to="#" className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        
     </div>
     <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
        <Link to='#' className='menu-bars'>
          <AiIcons.AiOutlineClose />
        </Link>
        </li>
        {SidebarData.map((item, index)=>{
          return(
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span className='span-title'>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>

     </nav>
     </IconContext.Provider>
     </div>
    </div>
  )
}

export default Navbar
