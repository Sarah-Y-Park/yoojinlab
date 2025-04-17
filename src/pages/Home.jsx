import { useState } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skill from './Skill';
import Portfolio from './Portfolio';
import Contact from './Contact';

import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  const [mainKey, setMainKey] = useState(0);

  const resetMain = () => {
    setMainKey((prev) => prev + 1);
  };

  return (
    <>
      <Header onHomeClick={resetMain} />

      <main className="space-y-0">
        <Hero key={mainKey} />
      </main>

      <About />
      {/* <Experience /> ← Will be added later */}
      <Skill />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default Home;
