import React from "react"; 
import reactImg from '../../assets/react-img.png'
import './Header.css'
// import jsxuiImg from './assets/jsx-ui.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(randomNum) {
  return Math.floor(Math.random() * (randomNum + 1));
}
const randomDescription = reactDescriptions[genRandomInt(2)];


export function Header({}) {
    return <header>
                <img src ={reactImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                {/* when you add {} you tell js you want to use dynamic content either like below or as a value as and attribute or Any expression that directly produces a value */}
                <p> <span>{randomDescription}</span> React concepts you will need for almost any app you are going to build! </p>
                
            </header>;
    }
    