import React from 'react'
import PageContainer from '../../components/shared/PageContainer'
import HeroImage from '../../components/shared/HeroImage'
import { HeroData } from '../../assets/content/aboutUsContent'
import SectionPhilosphy from "../landingPage/section_philosphy/SectionPhilosphy"
import Service from './section_service/Service'


export default function AboutUS() {
  return (
    <PageContainer>
      <HeroImage imgSrc={HeroData.imgSrc} heroText = {HeroData.text}/>
      <SectionPhilosphy/>
      <Service/>
    </PageContainer>
  )
}