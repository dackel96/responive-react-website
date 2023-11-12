import React from 'react';
import HeroSection from '../../hero-section/HeroSection';
import { homeObjOne } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Home;
