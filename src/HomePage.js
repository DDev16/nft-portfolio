
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Why from './components/Why';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Collection from './components/DappVault';
import QnA from './components/QnA';
import Footer from './components/Footer';
import Break from './components/Break';
import ParallaxComponent from './components/ParaImages';

function HomePage() {
  return (
    <div>
      <Navbar />
      {/* <Atom /> */}
      <Hero id="hero" />
      <Break />
      <Why id="why" />
      <Break />
      <About id="about" />
      <Break />
      
      <Roadmap id="roadmap" />
      <Break />
      <Collection id="collection" />
      <Break />
      <Team id="team" />
      <Break />
      <QnA id="qna" />
      <Break />
      <Footer />
      <ParallaxComponent id="parallax"  />
      <Break />
    </div>
  );
}

export default HomePage;
