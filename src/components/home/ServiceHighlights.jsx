import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Home, Building2, AlertCircle } from 'lucide-react';

// Images
import imgResidential from '../../assets/Residential Services.jpeg';
import imgCommercial from '../../assets/Commercial Services.jpeg';
import imgEmergency from '../../assets/Emergency Repairs.jpeg';

const services = [
    {
        id: 'residential',
        title: "Residential",
        description: "Complete home plumbing solutions, from luxury upgrades to routine repairs.",
        icon: <Home className="w-6 h-6" />,
        image: imgResidential
    },
    {
        id: 'commercial',
        title: "Commercial",
        description: "Industrial-grade systems and maintenance for businesses and facilities.",
        icon: <Building2 className="w-6 h-6" />,
        image: imgCommercial
    },
    {
        id: 'emergency',
        title: "24/7 Emergency",
        description: "Rapid response team ready efficiently handle urgent crises anytime.",
        icon: <AlertCircle className="w-6 h-6" />,
        image: imgEmergency
    }
];

import { useNavigate } from 'react-router-dom';

const ServiceHighlights = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const { contextSafe } = useGSAP({ scope: sectionRef });

    const handleMouseEnter = contextSafe((e) => {
        const card = e.currentTarget;
        const img = card.querySelector('.service-img');
        const arrow = card.querySelector('.arrow-icon');

        gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out" });
        gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
    });

    const handleMouseLeave = contextSafe((e) => {
        const card = e.currentTarget;
        const img = card.querySelector('.service-img');
        const arrow = card.querySelector('.arrow-icon');

        gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
        gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
    });

    return (
        <section ref={sectionRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] leading-tight mb-6">
                        Comprehensive Plumbing Services.
                    </h2>

                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate('/services')}
                            className="group flex items-center gap-2 text-[#0d2b26] font-semibold border-b border-[#0d2b26]/20 pb-1 hover:border-[#0d2b26] transition-colors"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`group relative rounded-3xl overflow-hidden cursor-pointer h-full shadow-lg ${service.id === 'commercial' ? 'md:mt-12' : ''}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => navigate('/services')}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-img w-full h-full object-cover transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b26] via-[#0d2b26]/50 to-transparent opacity-90" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0 text-white/80 text-sm font-light">
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                                        {service.icon}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                                    {service.description}
                                </p>

                                <button
                                    onClick={(e) => { e.stopPropagation(); navigate('/services'); }}
                                    className="flex items-center gap-2 text-[var(--color-secondary)] font-medium text-sm tracking-wide uppercase hover:text-white transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="arrow-icon w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceHighlights;
