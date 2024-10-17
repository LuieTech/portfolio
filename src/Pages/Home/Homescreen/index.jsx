import React from 'react'
import Hero from '../Hero'
import About from '../About';
import Portfolio from '../Portfolio';
import ContactMe from '../ContactMe';
import MySkills from '../MySkills';
import Footer from '../Footer';

function Home() {

  return (
      <>
        <Hero />
        <MySkills />
        <About />
        <Portfolio />
        <ContactMe />
        <Footer />
      </>
    )
}

export default Home;
