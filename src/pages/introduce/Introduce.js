import React, { useState,useRef, useEffect } from 'react';
import './Introduce.css'
import './IntroduceSlide.css'

import {FiChevronLeft,FiChevronRight } from "react-icons/fi"
import {FaPause,FaPlay,FaCircle} from "react-icons/fa";


import IntroduceSlide from "./IntroduceSlide";
import IntroduceContent from "./IntroduceContent";

const Introduce = () => {
  const images = [
    'https://mblogthumb-phinf.pstatic.net/20120305_257/ioveproject_1330926790006LEKe6_PNG/%B0%AD%B3%B22.png?type=w2', 
    'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true); // Add state to toggle sliding

  const slideComponents = [
    <IntroduceSlide index={0} />,
    <IntroduceSlide index={1} />,
  ];


  const sliderImages = useRef([]);
  const intervalRef = useRef(null);

  const handlePreviousImage = () => {
    const newIndex = (currentImageIndex + images.length - 1) % images.length;
    setCurrentImageIndex(newIndex);
  
    const sliderImages = document.querySelectorAll('.introduce-slider-image');
    const currentImage = sliderImages[currentImageIndex];
    const newImage = sliderImages[newIndex];
  
    if (currentImage && newImage) {
      currentImage.classList.add('fadeOut');
  
      setTimeout(() => {
        currentImage.classList.remove('active');
        currentImage.classList.remove('fadeOut');
        newImage.classList.add('active');
        // Add z-index logic to set the current slide's z-index to 2
        currentImage.style.zIndex = '1';
        newImage.style.zIndex = '2';
      }, 300);
    }
  };
  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  
    const sliderImages = document.querySelectorAll('.introduce-slider-image');
    const currentImage = sliderImages[currentImageIndex];
    const newImage = sliderImages[newIndex];
  
    if (currentImage && newImage) {
      currentImage.classList.add('fadeOut');
  
      setTimeout(() => {
        currentImage.classList.remove('active');
        currentImage.classList.remove('fadeOut');
        newImage.classList.add('active');
        // Add z-index logic to set the current slide's z-index to 2
        currentImage.style.zIndex = '1';
        newImage.style.zIndex = '2';
      }, 300);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isSliding) { // Check if sliding is enabled
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    
        const sliderImages = document.querySelectorAll('.introduce-slider-image');
        const currentImage = sliderImages[currentImageIndex];
        const newImage = sliderImages[newIndex];
    
        if (currentImage && newImage) {
          currentImage.classList.add('fadeOut');
    
          setTimeout(() => {
            currentImage.classList.remove('active');
            currentImage.classList.remove('fadeOut');
            newImage.classList.add('active');
            // Add z-index logic to set the current slide's z-index to 2
            currentImage.style.zIndex = '1';
            newImage.style.zIndex = '2';
          }, 300);
        }
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [currentImageIndex, images.length, isSliding]); // Add isSliding to the dependency array

  return (
    <div className="introduce-container"> 
      <div className="introduce-slider">
          
          {slideComponents.map((slideComponent, index) => (
            <div
              key={index}
              className={`introduce-slider-image${index === currentImageIndex ? " active" : ""}`}
              ref={(el) => (sliderImages.current[index] = el)}
              style={{ backgroundImage: `url(${images[index]})`}}
            >
              {slideComponent}
            </div>
          ))}
        <FiChevronLeft className="introduce-slider-previous" onClick={handlePreviousImage}>
        </FiChevronLeft>
        <FiChevronRight className="introduce-slider-next" onClick={handleNextImage}>
        </FiChevronRight>
      </div>
      <IntroduceSlideFooter setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} isSliding={isSliding} setIsSliding={setIsSliding} />
        
      <IntroduceContent/>
    </div>
  );
};
const IntroduceSlideBody = (props) => {
  if (props.index === 0){
    return(
        <IntroduceSlide index={0} style={{backgroundImage:`url(${'https://mblogthumb-phinf.pstatic.net/20120305_257/ioveproject_1330926790006LEKe6_PNG/%B0%AD%B3%B22.png?type=w2'})`}}/>
      );
  }else if(props.index === 1){
    return(
      <IntroduceSlide index={1} style={{backgroundImage:`url(${'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'})`}}/>
      );
  }
}

const IntroduceSlideFooter = ({ setCurrentImageIndex, currentImageIndex, isSliding, setIsSliding }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClickIndex = (index) => {
    setCurrentImageIndex(index);
  };

  const mouseOver = (e) =>{
    setIsHovering(true);
  } 
  const mouseOut = (e) =>{
    setIsHovering(false);
  } 


  return (
    <div className="introduce-footer-nav-frame" style={{zIndex:`3`}}>
      <div className="introduce-footer-nav-button-frame">
          <FaCircle
          style={{color:`${0 === currentImageIndex ? `` :`#FFFFFF`}` , margin:`20px`}}
          />
          <FaCircle
          style={{color:`${1 === currentImageIndex ? `` :`#FFFFFF`}`, margin:`20px`}}
          />
        
        <div>
        {
          isSliding === true
          ? <FaPause onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} style={{color:`${isHovering ? `#000000` :`#FFFFFF`}`, margin:`20px`}} onClick ={()=>setIsSliding(false)}/>
          : <FaPlay  onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} style={{color:`${isHovering ? `#000000` :`#FFFFFF`}`, margin:`20px`}} onClick ={()=>setIsSliding(true)}/>
        }
      </div>
      </div>
    </div>
  );
};





export default Introduce;
