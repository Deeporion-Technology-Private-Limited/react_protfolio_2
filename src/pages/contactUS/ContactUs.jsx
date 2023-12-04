import React from 'react'
import PhilosphyHeading from '../landingPage/section_philosphy/components/PhilosphyHeading'
import { headings,contactInfo } from '../../assets/content/contactUsContent'
import {commonContent} from '../../assets/content/commonContent'
import HeroImage from '../../components/shared/HeroImage'
import HeroImg from '../../assets/Images/contact-hroImg.jpg'
import FormImg from '../../assets/Images/contact-form-img.jpg'
import "./ContactUs.css"

export default function ContactUs() {
  return (
    <div className='w-full flex flex-column items-center justify-center'>
      <HeroImage imgSrc={HeroImg} heroText={headings.heroText} />
      <div className='wrapper-1'>
        <PhilosphyHeading heading={headings.heading} subheading={headings.subheading}  />
      </div>
      <div className='heading-container wrapper-2 flex justify-between items-start'>
        <div className='w-full flex flex-column'>
          <h3 className='header mp-0'>{commonContent.address}</h3>
          <h5 className='mp-0 subheader'>{contactInfo.address}</h5>
        </div>
        <div className='w-full flex flex-column'>
          <h3 className='header mp-0'>{commonContent.phone}</h3>
          <h5 className='mp-0 subheader'>{contactInfo.contact1}</h5>
          <h5 className='mp-0 subheader'>{contactInfo.contact2}</h5>
        </div>
        <div className='w-full flex flex-column'>
          <h3 className='header mp-0'>{commonContent.mail}</h3>
          <h5 className='mp-0 subheader'>{contactInfo.mail}</h5>
        </div>
      </div>
      <div className='contact-form-container wrapper-2 flex items-center justify-center'>
        <img src={FormImg} alt={FormImg} />
        <form className='contact-form w-full flex flex-column items-center justify-center' action="">
          <input className='form-input w-full' type="text"  placeholder='Your Name'/>
          <input className='form-input w-full' type="email" placeholder='Email Address' />
          <input className='form-input w-full' type="tel"  placeholder='Contact Number'/>
          <input className='text-field w-full' type="text"  placeholder='Your Name'/>
          <button className='submit-button'>{commonContent.submit}</button>
        </form>

      </div>
    </div>
  )
}
