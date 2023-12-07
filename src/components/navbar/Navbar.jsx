import React, {useState} from 'react';
// import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/images/logo.svg';
import logosquares from '../../assets/images/logo-squares.png';
import hamburger from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'
import './navbar.css';
//  good so far
const Navbar = () => {
    // const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <a href="#"><img src={logosquares} alt="logo" /></a>
                    
                </div>
                <div className='navbar-links_container'>
                    <p><a className='active' href='#home'>Home </a></p>
                    <p><a href='#Projects'>Projects </a></p>
                    <p><a href='#OpenAI'>Open AI </a></p> 
                    <p><a href='Contact'>Contact </a></p>
                </div>

                <div className='navbar-sign'>
                    <p>Sign in</p>
                    <button type='button'>Create Account</button>
                </div>
                    

            </div>

            <div className="mobile">
                    <img className='hamburger' src={hamburger} />
                    
            </div>
            
            <div className="mobile-menu-container">
                <img className='close' src={close} />
                <div className="mobile-menu-links">
                    <p><a className='active' href='#home'>Home </a></p>
                    <p><a href='#Projects'>Projects </a></p>
                    <p><a href='#OpenAI'>Open AI </a></p> 
                    <p><a href='Contact'>Contact </a></p>
                </div>
            </div>
            
            {/* <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && ( 
                    
                )}
            </div> */}
        
        
        </div>

    );
};

export default Navbar
