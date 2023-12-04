import React from 'react'
import PhilopsphyHeading from "../../landingPage/section_philosphy/components/PhilosphyHeading"
import { Review,Comment } from "../../../assets/content/aboutUsContent"
import JaneDoe from "../../../assets/Images/JaneDoe.jpg"
import "./Reviews.css"

export default function Reviews() {
  return (
    <div className='flex flex-column mp-0 wrapper-2'>
      <PhilopsphyHeading heading={Review.heading} subheading={Review.subheading}/>
      <div className='flex items-center'>
        <div className='flex flex-column review-text' >
          <div className='flex justify-start '>
            {Comment[0].comment}
          </div>
  

        </div>
        <div className='flex justify-end review-image-container'>
          <img src={JaneDoe} alt={JaneDoe} />
        </div>
      </div>
    </div>
  )
}
