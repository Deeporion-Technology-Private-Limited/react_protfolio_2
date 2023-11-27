import React from 'react'
import LatestWork01 from '../../../assets/Images/latest-work01.jpg'
import LatestWork02 from '../../../assets/Images/latest-work02.jpg'
import LatestWork03 from '../../../assets/Images/latest-work03.jpg'
import TabImage from '../../../assets/Images/Rectangle 322.jpg'
import './LatestWork.css'


export default function LatestWork() {
  return (
    <div className='philosphy_container'>
      <div className='heading-container flex flex-column justify-start items-center '>
        <div className='w-full flex'>
          <h4 className='feature_work mp-0'>Latest Wedding Photography work</h4>
        </div>
        <div className='w-full flex justify-start'>
          <h5 className='best_categories mp-0'>Join me on this visual journey, where every frame is a testament to the beauty that exists in the world and in each of us.</h5>
        </div>  
      </div>
      <div className='work-container relative'>
        <div className='image-container'>
          <img src={LatestWork01} alt="latest-work" />
        </div>
        <div className='img-container w-full mp-0 flex justify-center items-center'>
          <h4 className='img-text'>Wedding Editorial Photograhy</h4>
        </div>
        <div className='tab-container flex items-center'>
          <div className='button-container flex items-center'>
            <div className='w-full h-full'>
              <img src={TabImage} alt="" />
            </div>
            <div className='w-full h-full'>
              <h4>Traditional</h4>
              <h5>by Tabea </h5>
            </div>
          </div>
          <div className='button-container '>
            <div className='w-full h-full'>
              <img src={TabImage} alt="" />
            </div>
            <div className='w-full h-full'>
              <h4>Traditional</h4>
              <h5>by Tabea </h5>
            </div>
          </div>
          <div className='button-container flex justify-center items-center'>
            <div className='w-full h-full'>
              <img src={TabImage} alt="" />
            </div>
            <div className='w-full h-full'>
              <h4>Traditional</h4>
              <h5>by Tabea </h5>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
