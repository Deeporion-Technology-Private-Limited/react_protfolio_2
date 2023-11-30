import React from 'react'
import HeroImage from "../../components/shared/HeroImage"
import PageContainer from '../../components/shared/PageContainer'
import { HeroData } from "../../assets/content/portfolioContent"
import CategoriesGrid from '../../components/shared/CategoryGrid'


export default function PortfolioCategories() {
  return (
    <PageContainer>
      <HeroImage imgSrc={HeroData.imgSrc} heroText = {HeroData.text} spanText={HeroData.spanText}/>
      <CategoriesGrid gridWrapper={"wrapper-1"}/>
    </PageContainer>
  )
}
