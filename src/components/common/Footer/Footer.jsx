import React from 'react'
import "./Footer.css"
import FooterContainer from './FooterContainer';
import Blurb from './components/Blurb';
import QuicklinkNames from './components/QuickLinks';
import Blogs from './components/Blogs';
import NewsLetter from './components/NewsLetter';

export default function Footer() {
  return (
    <FooterContainer>
      <Blurb/>  
      <QuicklinkNames/>
      <Blogs/>
      <NewsLetter/>
    </FooterContainer>
  )
}
