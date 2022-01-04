import React from 'react';
import { WrapperContent, WrapperFull } from 'components/atoms/Wrapper';
import Footer from 'components/molecules/Footer';
import Navbar from 'components/molecules/Navbar';
import Service from 'components/molecules/OurService';
import ContentService from 'components/organisms/ContentService';
import Hero from 'components/organisms/Hero';
import LastArticle from 'components/organisms/LatestArticle';
import Costumer from 'components/molecules/Costumer';

function Home() {
  return (
    <WrapperFull>
      <WrapperContent>
        <Navbar />
        <Hero />
        <Service />
        <ContentService />
        <Hero HeroRightImg />
        <Hero HeroBorder />
        <Costumer />
        <LastArticle />
      </WrapperContent>
      <Footer />
    </WrapperFull>
  );
}

export default Home;
