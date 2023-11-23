import React from 'react'
import "./getInTouch.css"
import ContactUsButton from './components/ContactUsButton'

const getInTouch = () => {
  return (
    <div  className='contact_container flex_center'>
      <h3  className='contact_text'>Have a project in mind?</h3>
      <ContactUsButton/>
  </div>
  )
}

export default getInTouch;
