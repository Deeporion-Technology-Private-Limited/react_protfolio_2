import React from 'react'
import CategoriesGrid from "./components/CategoriesGrid"
import GridHeading from './components/GridHeading'

export default function Categories() {
  return (
    <div className='flex justify-center w_full categories_container'>
    <div style={{}} >
      <GridHeading/>
      <CategoriesGrid/>
    </div>
    </div>
  )
}
