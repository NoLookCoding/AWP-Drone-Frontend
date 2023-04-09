import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import "../Footer.css"

import {FiChevronLeft,FiChevronRight } from "react-icons/fi"
import {CiPause1,CiPlay1} from "react-icons/ci";
import {FaPause,FaPlay} from "react-icons/fa";

import HomeSlide from "./HomeSlide";
import HomeContent from "./HomeContent";

const images = ['https://cdn.pixabay.com/photo/2016/11/29/02/59/drone-1866961_1280.jpg', 
'https://cdn.pixabay.com/photo/2017/09/07/08/57/drone-2724257_1280.jpg',
'https://www.cctvnews.co.kr/news/photo/202009/209837_210397_5058.jpg',
'https://media.kingston.com/kingston/hero/ktc-hero-blog-personal-storage-drone-photography-tips-lg.jpg'];

const Home = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true); // Add state to toggle sliding

  const slideComponents = [
    <HomeSlide index={0} />,
    <HomeSlide index={1} />,
    <HomeSlide index={2} />,
    <HomeSlide index={3} />
  ];


  const sliderImages = useRef([]);
  const intervalRef = useRef(null);

  const handlePreviousImage = () => {
    const newIndex = (currentImageIndex + images.length - 1) % images.length;
    setCurrentImageIndex(newIndex);
  
    const sliderImages = document.querySelectorAll('.home-slider-image');
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
  
    const sliderImages = document.querySelectorAll('.home-slider-image');
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
    
        const sliderImages = document.querySelectorAll('.home-slider-image');
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
    <div className="home-container"> 
      <div className="home-slider">
          {slideComponents.map((slideComponent, index) => (
            <div
              key={index}
              className={`home-slider-image${index === currentImageIndex ? " active" : ""}`}
              ref={(el) => (sliderImages.current[index] = el)}
              style={{ backgroundImage: `url(${images[index]})`}}
            >
              {slideComponent}
            </div>
          ))}
        <HomeSlideFooter setCurrentImageIndex={setCurrentImageIndex} currentImageIndex={currentImageIndex} isSliding={isSliding} setIsSliding={setIsSliding} />
        <FiChevronLeft className="home-slider-previous" onClick={handlePreviousImage}>
        </FiChevronLeft>
        <FiChevronRight className="home-slider-next" onClick={handleNextImage}>
        </FiChevronRight>
      </div>
      <HomeContent/>
    </div>
  );
};

const HomeSlideFooter = ({ setCurrentImageIndex, currentImageIndex, isSliding, setIsSliding }) => {
  const buttonLabels = ["사전판매", "Drone Rx", "새 출발 SALE", "Global Drones"];
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
    <div className="home-footer-nav-frame" style={{zIndex:`3`}}>
      <div className="home-footer-nav-button-frame">
        {buttonLabels.map((label, index) => (
          <button
          key={index}
          className={`home-footer-nav-button-item${
            index === currentImageIndex ? " active" : ""
          }`}
          onClick={() => handleClickIndex(index)}
        >
            {label}
          </button>
        ))}
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




export default Home;