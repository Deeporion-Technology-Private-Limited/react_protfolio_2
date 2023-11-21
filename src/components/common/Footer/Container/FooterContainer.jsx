import React from 'react'

export default function FooterContainer(props) {
  return (
    <div className='footer_container'>
      <div className='footer_grid'>
        {props.children}
      </div>
    </div>
  )
}
