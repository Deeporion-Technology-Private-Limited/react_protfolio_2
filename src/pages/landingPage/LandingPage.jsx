import React from 'react'
import PageContainer from '../../components/shared/PageContainer'
import ScetionCarousel from './section_carousel/SectionCarousel'
import SectionCategories from './section_categories/SectionCategories'
import SectionPhilosphy from './section_philosphy/SectionPhilosphy'
import SectionQuote from './section_quote/SectionQuote'


export default function LandingPage() {
  return (
    <PageContainer>
      <ScetionCarousel/>
      <SectionCategories/>
      <SectionPhilosphy/>
      <SectionQuote/>
    </PageContainer>
  )
}
