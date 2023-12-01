import React from 'react'
import PhilopsphyHeading from "../../landingPage/section_philosphy/components/PhilosphyHeading"
import { Review } from "../../../assets/content/aboutUsContent"

export default function Reviews() {
  return (
    <div className='flex flex-col mp-0 wrapper-2'>
      <PhilopsphyHeading heading={Review.heading} subheading={Review.subheading}/>
      <div className='flex flex-col items-start'>
        <div>

        </div>
        <div className='flex image-container'>

        </div>
      </div>
    </div>
  )
}
