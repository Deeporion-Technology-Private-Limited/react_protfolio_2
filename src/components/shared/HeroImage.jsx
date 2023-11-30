import React from 'react'
import "./HeroImage.css"

export const HeroImage = ({imgSrc,heroText,spanText}) => {
  console.log("imgSrc")
  return (
    <div className='hero-image w-full relative'>
      <div className='w-full h-full'>
        <img className='hero-image-dimensions' src={imgSrc} alt={imgSrc} />
      </div>
      <div className='text-center absolute'>
          <h3>{heroText} <span>{spanText}</span>  </h3>
      </div>
    </div>
  )
}

export default HeroImage;