import React from 'react'
import "../Categories.css"

export default function GridHeading({heading,subheading}) {
  return ( 
    <div className='w-full flex flex-column justify-start items-center'>
      <div className='w-full flex heading-translate'>
        <h4 className='feature-work heading-translate'>{heading}</h4>
      </div>
      <div className='w-full flex subheading-translate'>
        <h5 className='best-categories'>{subheading}</h5>
      </div>  
    </div>
  )
}
