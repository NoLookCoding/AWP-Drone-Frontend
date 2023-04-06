import React, { useState } from "react";
import "./Home.css";

const Home = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex + images.length - 1) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <button className="slider-previous" onClick={handlePreviousImage}>
        &lt;
      </button>
      <button className="slider-next" onClick={handleNextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Home;
