import React from 'react'
import PhilosphyHeading from '../../landingPage/section_philosphy/components/PhilosphyHeading'
import { ServiceData,GridInfo } from '../../../assets/content/aboutUsContent'
import "./Service.css"

export default function Service() {
  return (
    <div className='flex flex-column w-fit h-fit wrapper-1'>
      <PhilosphyHeading heading={ServiceData.heading} subheading={ServiceData.subheading}/>
      <div className="service-grid grid-wrapper">
        {GridInfo.map((data) => (
          <div key={data.id} className="service-element relative">
            <img className="" src={data.imageName} alt={data.imageName.replace(" ","_")} />
            <div className="centered-text w-full image-heading z-99">{data.title}</div>
            <div className="hover-text w-full h-full flex justify-center items-end">
              <p className="w-full text-translate">{data.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
