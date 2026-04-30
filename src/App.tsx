/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import SportsAndHobbies from './components/SportsAndHobbies';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="antialiased selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <SportsAndHobbies />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}

