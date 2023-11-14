import React from 'react';
import HeroSection from '../../hero-section/HeroSection';
import { homeObjOne } from './Data';
import Pricing from '../../Pricing/Pricing';

function Home() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
