import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Timeline from './components/Timeline';
import Inventions from './components/Inventions';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Timeline />
        <Inventions />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
