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
                    <img className='close' src={close} />
                </div>
            {/* <div className='navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Create Account</button>
            </div> */}
            
            {/* <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && ( 
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                                <p><a href='#home'>Home </a></p>
                                <p><a href='#wgpt3'>What is GPT3? </a></p>
                                <p><a href='#possibility'>Open AI </a></p>    
                                <p><a href='#features'>Case Studies </a></p>
                                <p><a href='#blog'>Library </a></p>
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Navbar
