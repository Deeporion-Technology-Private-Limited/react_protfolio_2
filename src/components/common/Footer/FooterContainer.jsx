import React from 'react'

export default function FooterContainer(props) {
  return (
    <div className='footer-container flex flex-column justify-center items-center gap-18'>
        {props.children}
    </div>
  )
}
