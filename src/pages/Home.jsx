import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import BeforeAfterComparison from '../components/home/BeforeAfterComparison';
import TrustSection from '../components/home/TrustSection';

const Home = () => {
    return (
        <>
            <Hero
                headline={{ line1: "Expert Plumbing,", line2: "Trusted Solutions." }}
                subtitle="Don't let plumbing problems disrupt your life. From advanced leak detection to full-scale installations, United Plumbing Co. delivers fast, reliable, and premium service you can count on 24/7."
                trustBadge={{ text: "Top Rated Service", icons: ["★", "★", "★", "★", "★"] }}
                buttons={{
                    primary: { text: "Book Now", onClick: () => console.log('Book') },
                    secondary: { text: "(555) 123-4567", onClick: () => console.log('Call') }
                }}
            />
            <TrustSection />
            <ServiceHighlights />
            <BeforeAfterComparison />

        </>
    );
};

export default Home;
