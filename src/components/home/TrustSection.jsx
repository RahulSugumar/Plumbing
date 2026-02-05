import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Images
import imgResponse from '../../assets/rapid_response.png';
import imgLicensed from '../../assets/fully_licensed.png';
import imgPricing from '../../assets/transparent_pricing.png';
import imgSatisfaction from '../../assets/satisfaction_guaranteed.png';

const features = [
    {
        id: 1,
        image: imgResponse,
        title: "24/7 Rapid Responses",
        description: "Burst pipe at 3 AM? We're deployed and on-site while others are sleeping.",
        span: "md:col-span-2 md:row-span-1" // Wide card
    },
    {
        id: 2,
        image: imgLicensed,
        title: "Fully Licensed & Insured",
        description: "Certified professionals managing your property with complete comprehensive coverage.",
        span: "md:col-span-1 md:row-span-1" // Standard card
    },
    {
        id: 3,
        image: imgPricing,
        title: "Transparent Pricing",
        description: "Flat-rate quotes approved by you before a single tool touches your plumbing.",
        span: "md:col-span-1 md:row-span-1" // Standard card
    },
    {
        id: 4,
        image: imgSatisfaction,
        title: "100% Satisfaction Guaranteed",
        description: "We don't just fix it. We stand behind our craftsmanship with a rock-solid warranty.",
        span: "md:col-span-2 md:row-span-1" // Wide card
    }
];

const TrustSection = () => {
    const sectionRef = useRef(null);

    const { contextSafe } = useGSAP({ scope: sectionRef });

    const handleMouseEnter = contextSafe((e) => {
        const card = e.currentTarget;
        const img = card.querySelector('.zoom-img');
        const overlay = card.querySelector('.overlay-content');

        gsap.to(img, { scale: 1.05, duration: 0.8, ease: "power2.out" });
        gsap.to(overlay, { translateY: -10, duration: 0.5, ease: "power2.out" });
    });

    const handleMouseLeave = contextSafe((e) => {
        const card = e.currentTarget;
        const img = card.querySelector('.zoom-img');
        const overlay = card.querySelector('.overlay-content');

        gsap.to(img, { scale: 1, duration: 0.8, ease: "power2.out" });
        gsap.to(overlay, { translateY: 0, duration: 0.5, ease: "power2.out" });
    });

    return (
        <section ref={sectionRef} className="py-32 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] mb-6 tracking-tight">
                        Why We Are The <span className="text-[var(--color-secondary)] italic">Gold Standard.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Premium plumbing isn't just about pipes. It's about peace of mind, pristine service, and a guarantee that lasts.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className={`relative group rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${feature.span}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="zoom-img w-full h-full object-cover transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b26]/90 via-[#0d2b26]/40 to-transparent z-10" />
                            </div>

                            {/* Content Overlay */}
                            <div className="overlay-content absolute bottom-0 left-0 w-full p-8 z-20 translate-y-0 transition-transform duration-500">
                                <div className="w-12 h-1 bg-[var(--color-secondary)] mb-6 rounded-full" />
                                <h3 className="text-3xl font-bold text-white mb-3 font-display tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-white/80 text-lg leading-relaxed font-light max-w-lg">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-500 rounded-3xl z-30 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
