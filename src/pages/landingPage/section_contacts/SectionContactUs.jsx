import React from 'react'
import './getInTouch.css'
import ContactImage  from '../../../assets/Images/ContactUsImage.jpg'

export default function SectionContactUs() {
  return (
    <div className="w-full wrapper-3 contact-container relative flex flex-col items-center justify-center">
      <div className='w-full contact-image-container w-full'>
        <img src={ContactImage} alt={ContactImage} />
      </div>
      <div className='contact-text-container flex flex-column items-center justify-center'>
        <h3 className="contact_text">Have a project in mind?</h3>
        <button className="contact_button" id="contact_button" type="button">
          Lets Talk
        </button>
      </div>
    </div>
  )
}
