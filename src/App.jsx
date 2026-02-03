import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <main>
        <Hero
          headline={{ line1: "Expert Plumbing,", line2: "Trusted Solutions." }}
          subtitle="From leak detection to full installations, United Plumbing Co. delivers fast, reliable, and premium service."
          trustBadge={{ text: "Top Rated Service", icons: ["★", "★", "★", "★", "★"] }}
          buttons={{
            primary: { text: "Book Now", onClick: () => console.log('Book') },
            secondary: { text: "(555) 123-4567", onClick: () => console.log('Call') }
          }}
        />
        {/* Sections will go here */}
        <div className="p-10 text-center">
          <h1 className="text-4xl font-bold text-primary-900">United Plumbing Co.</h1>
          <p className="mt-4 text-lg text-gray-600">Premium Residential & Commercial Plumbing</p>
        </div>
      </main>
    </div>
  );
}

export default App;
