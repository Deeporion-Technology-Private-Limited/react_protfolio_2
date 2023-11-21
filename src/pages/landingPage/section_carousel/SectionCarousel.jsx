import React, { useEffect, useState } from "react";
import Image00 from "../../../assets/Images/carousel_image00.jpg";
import Image01 from "../../../assets/Images/carousel_image01.jpg";
import Image02 from "../../../assets/Images/carousel_image02.jpg";
import Image03 from "../../../assets/Images/carousel_image03.jpg";
import Image04 from "../../../assets/Images/carousel_image04.jpg";
import "./SectionCarousel.css"

export default function ScetionCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image00, Image01, Image02, Image03, Image04];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [currentSlide]);

  return (
    <div className="carousel_container">
      <div className="carousel_image_container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentSlide ? "block" : "none" }}
          />
        ))}
      </div>
      <div className="carousel_textContainer">
        <p className="flex items-center h-full">
          Hi, I am Tabea, I am a Photographer, I capture
        </p>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
