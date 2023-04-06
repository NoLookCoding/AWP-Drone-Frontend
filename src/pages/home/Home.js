import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

import {FiChevronLeft,FiChevronRight } from "react-icons/fi"

const Home = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      }, 500);
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
      }, 500);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(newIndex);
  
      const sliderImages = document.querySelectorAll('.home-slider-image');
      const currentImage = sliderImages[currentImageIndex];
      const newImage = sliderImages[newIndex];
  
      if (currentImage && newImage) {
        currentImage.classList.add('fade-out');
  
        setTimeout(() => {
          currentImage.classList.remove('active');
          currentImage.classList.remove('fade-out');
          newImage.classList.add('active');
        }, 500);
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [currentImageIndex, images.length]);

  return (
    <div className="home-container">
      <div className="home-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`home-slider-image${index === currentImageIndex ? ' active' : ''}`}
            ref={el => (sliderImages.current[index] = el)}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <FiChevronLeft className="home-slider-previous" onClick={handlePreviousImage}>
        </FiChevronLeft>
        <FiChevronRight className="home-slider-next" onClick={handleNextImage}>
        </FiChevronRight>
      </div>
    </div>
  );
};

export default Home;
