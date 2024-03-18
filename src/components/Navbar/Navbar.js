import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logoter.gif'
import { Link } from 'react-scroll';
import menuicon from '../../assets/menu.svg'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu=() =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true); 
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt='' className='logo' />
      <ul className={mobileMenu ? '':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li> <Link to='programs' smooth={true} offset={-260} duration={500} >Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} >About</Link></li>
        <li><Link to='features' smooth={true} offset={-260} duration={500} >Features</Link></li>
        <li><Link to='blogs' smooth={true} offset={-260} duration={500} >Blogs</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} >Contact us</Link></li>
        <li><button className='btn'>Login</button></li>
      </ul>
      <img src={menuicon} alt='' className='menuicon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
