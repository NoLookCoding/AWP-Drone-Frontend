import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom"
import './Footer.css'

import {MdLaptopMac} from 'react-icons/md';
import {BsGithub,BsInstagram} from 'react-icons/bs';



const Footer = () => {
    const [isGHovering, setIsGHovering] = useState(false);

  const mouseOverGit = (e) =>{
    setIsGHovering(true);
  } 
  const mouseOutGit = (e) =>{
    setIsGHovering(false);
  } 

    const linkToGithub = () => {
        window.open("https://github.com/SeungGun/AWP_FrontDev",'new');
      };
    return (
        <>
    
        <div className="footer-nav-frame">
            <div className="footer-nav-button-frame">
                    <Link to = "/">
                    <button className="footer-nav-button-item">
                        개인정보처리방침
                    </button>
                    </Link> 
                    <Link to = "/">
                    <button className="footer-nav-button-item">
                        이용약관
                    </button>
                    </Link> 
         
                    <Link to = "/">
                    <button className="footer-nav-button-item">
                        Home
                    </button>
                    </Link> 

                    <button className="footer-nav-button-item">
                    Copyright ⓒ NOLOOKCOIDNG
                    </button>

                    <BsGithub onClick={()=> linkToGithub()} onMouseOver={(e) => mouseOverGit(e)} onMouseOut={(e) => mouseOutGit(e)} style={{color:`${isGHovering ? `#2400FE` :`#000000`}`, width:`20px`, height:'20px', marginLeft:`15px`}}/>
            </div>
        </div>
        </>
    );
}
export default Footer;
