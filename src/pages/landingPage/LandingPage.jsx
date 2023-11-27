import React from 'react'
import PageContainer from '../../components/shared/PageContainer'
import ScetionCarousel from './section_carousel/SectionCarousel'
import SectionCategories from './section_categories/SectionCategories'
import SectionPhilosphy from './section_philosphy/SectionPhilosphy'
import SectionQuote from './section_quote/SectionQuote'
import SectionLatestWork from './section_latestWork/SectionLatestWork'
import SectionContactUs from './section_contacts/SectionContactUs'


export default function LandingPage() {
  return (
    <PageContainer>
      <ScetionCarousel/>
      <SectionCategories/>
      <SectionPhilosphy/>
      <SectionQuote/>
      <SectionLatestWork/>
      <SectionContactUs/>
    </PageContainer>
  )
}
