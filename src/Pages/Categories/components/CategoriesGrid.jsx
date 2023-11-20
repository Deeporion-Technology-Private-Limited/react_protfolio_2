import React from 'react'
import natureImage from "../../../assets/image_5.jpg"
import peopleImage from "../../../assets/image_4.jpg"
import manMadeImage from "../../../assets/image_3.jpg"
import fashionImage from "../../../assets/image_2.jpg"
import abstractImage from "../../../assets/image_6.jpg"
import blackWhiteImage from "../../../assets/image_1.jpg"
import "../Categories.css"

export default function Categories() {
const categories = [
  {
    id:"1",
    name:"Nature",
    imageName:natureImage,
  },
  {
    id:"2",
    name:"People",
    imageName:peopleImage
  },
  {    
    id:"3",
    name:"Manmade",
    imageName:manMadeImage

  },
  
  {
    id:"4",
    name:"Fashion",
    imageName:fashionImage

  },
  {
    id:5,
    name:"Abstract",
    imageName:abstractImage,
  },
  {
    id:6,
    name:"Black and White",
    imageName:blackWhiteImage
  },
]

  return (
    <div className='flex justify-center items-center grid_wrapper '> 
      <div className='grid_container'>
      {categories.map((data) =>(
        <div key={data.id} className='grid_element'>
          <img className='' src={data.imageName} alt=""/>
          <div className="centered-text">{data.name}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
