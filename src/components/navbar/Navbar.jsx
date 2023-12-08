import React, {useState} from 'react';
// import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/images/logo.svg';
import logosquares from '../../assets/images/logo-squares.png';
import hamburger from '../../assets/images/menu.svg'
import close from '../../assets/images/close.svg'
import './navbar.css';
//  good so far
const Navbar = () => {
    
    const [isNavOpen, setIsNavOpen] = useState(false);
      // Function to toggle the state when the button is clicked
        const toggleNav = () => {
            console.log('the toggleNav is selected')
            setIsNavOpen(!isNavOpen);
        };
        // State to track the selected menu item
        const [selectedItem, setSelectedItem] = useState(null);
        // Function to handle menu item click and update the state
            const handleMenuItemClick = (item) => {
                setSelectedItem(item);
            };

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <a href="#"><img src={logosquares} alt="logo" /></a>
                    
                </div>
                <div className='navbar-links_container'>
                    {/* <p><a className='active' href='#home'>Home </a></p>
                    <p><a href='#Projects'>Projects </a></p>
                    <p><a href='#OpenAI'>AI </a></p> 
                    <p><a href='#Contact'>Contact </a></p> */}
                    {/* New menu to handle Active Class State */}
                    <p><a className={selectedItem === 'home' ? 'active' : ''} onClick={() => handleMenuItemClick('home')}>Home</a></p>
                    <p><a className={selectedItem === 'about' ? 'active' : ''} onClick={() => handleMenuItemClick('about')}>About</a></p>
                    <p><a className={selectedItem === 'services' ? 'active' : ''} onClick={() => handleMenuItemClick('services')}>Services</a></p>
        {/* Add more menu items as needed */}



                    {/* End of menu for Active State */}
                </div>

                <div className='navbar-sign'>
                    <p>Sign in</p>
                    <button type='button'>Create Account</button>
                </div>
                    

            </div>

            <div className="mobile">
                    {/* Button that triggers the toggleNav function */}
                    <img onClick={toggleNav} className='hamburger' src={hamburger} />
                    
            </div>
            {/* here we place a ternary operator to check if the state of the Nav is open or not
            if it is open the class should be 'mobile-menu-open; if it is not open use the other class
            this basically sets the transformX property to move it in and out of the viewport */}
            <div className={isNavOpen ? 'mobile-menu-open': "mobile-menu-container  "}>
                <img onClick={toggleNav} className='close' src={close} />
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
