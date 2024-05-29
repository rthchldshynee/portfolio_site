import React, { useState } from 'react';
import './Navbar.css';
import LOGO from '../../asset/LOGO.png'
import contact from '../../asset/contact.png';
import {Link} from 'react-scroll';
import menu from '../../asset/menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
    <div class="logo-container">
        <nav className='navbar'>
            <img src={LOGO} alt="LOGO" className='LOGO'/>
            <div className='desktopMenu'>
                <Link activeClass='active' to= 'intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to= 'about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About Me</Link>
                <Link activeClass='active' to= 'works' spy={true} smooth={true} duration={500} className='desktopMenuListItem'>Projects</Link>
                <Link activeClass='active' to= 'skills' spy={true} smooth={true} offset={-0} duration={500} className='desktopMenuListItem'>Services</Link>

            </div>
           <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
           }} >
            <img src={contact} alt="contact" className='contact' />Contact Me</button>


            <img src={menu} alt="menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to= 'intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to= 'About' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link activeClass='active' to= 'works' spy={true} smooth={true} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to= 'skills' spy={true} smooth={true} offset={-0} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Services</Link>
                <Link activeClass='active' to= 'contact' spy={true} smooth={true} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contacts</Link>

            </div>
        </nav>
    </div>

    )
}


export default Navbar