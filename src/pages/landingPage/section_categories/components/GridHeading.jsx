import React from 'react'
import { Headings } from "../../../../assets/content/gridContent"

export default function GridHeading() {
  return ( 
    <div className='w-full flex flex-column justify-start items-center'>
      <div className='w-full flex'>
        <h4 className='feature-work'>{Headings.heading}</h4>
      </div>
      <div className='w-full flex'>
        <h5 className='best-categories'>{Headings.subHeading}</h5>
      </div>  
    </div>
  )
}
