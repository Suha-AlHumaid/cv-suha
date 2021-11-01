import React from 'react'
import './style.css'
import logo from './logo.png'
import {AiFillGithub} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
 function Card() {
    return (
        <div>
            <img className="img-circle" src={logo} alt="Logo"/>
            <h1 className="text">Suha AlHumaid</h1>
            <h2 className="text">Web Developer</h2>
            <ul className="ulContact">
                <li className="contact">Saudi Arabia, AlQassim</li>
                <li className="contact"><a href = "mailto: Suhaalhumaid@gmail.com">Suhaalhumaid@gmail.com</a></li>
            </ul>
            <div className="cardd">
            <AiFillGithub href="https://github.com/Suha-AlHumaid" className="iconCard"/>
            <BsTwitter className="iconCard"/>
            </div>
               <p className="small-text">I built this site with React components.</p>
        </div>
    )
}
export default Card;