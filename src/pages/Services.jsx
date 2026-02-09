import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Wrench, Droplets, Thermometer, Home, Building2, Flame,
    Zap, Hammer, ShieldCheck, Clock, ArrowRight, ArrowUpRight
} from 'lucide-react';

import burstPipeImg from '../assets/Burst Pipe Repair.jpeg';
import leakDetectionImg from '../assets/Severe Leak Detection.jpeg';
import gasLeakImg from '../assets/Gas Leak Fixes.jpeg';
import overflowingToiletImg from '../assets/Overflowing Toilets.jpeg';
import waterHeaterImg from '../assets/Water Heater Install.jpeg';
import drainCleaningImg from '../assets/Drain Cleaning.jpeg';
import fixtureUpdatesImg from '../assets/Fixture Updates.jpeg';
import sewerLineImg from '../assets/Sewer Line Repair.jpeg';
import backflowImg from '../assets/Backflow Prevention.jpeg';
import greaseTrapImg from '../assets/Grease Trap Cleaning.jpeg';
import hydroJettingImg from '../assets/Hydro Jetting.jpeg';
import maintenanceImg from '../assets/System Maintenance.jpeg';

import heroProfessionalImg from '../assets/hero_professional.png';
import { Phone, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { useNavigate, useLocation } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const headerRef = useRef(null);
    const containerRef = useRef(null);

    // Handle scroll to hash
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Small delay to ensure render and GSAP doesn't conflict
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    useGSAP(() => {
        // Header Animation
        const tl = gsap.timeline();
        tl.from(headerRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Service Sections Animation
        const sections = gsap.utils.toArray('.service-category');
        sections.forEach((section) => {
            gsap.fromTo(section.querySelectorAll('.service-card'),
                { y: 100, opacity: 0, autoAlpha: 0 },
                {
                    y: 0,
                    opacity: 1,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Trigger earlier
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }, { scope: containerRef });

    const categories = [
        {
            id: "emergency",
            title: "Emergency Services",
            description: "24/7 rapid response for critical failures. We're there when you need us most.",
            color: "text-red-600",
            services: [
                { name: "Burst Pipe Repair", icon: Droplets, image: burstPipeImg, link: "/services/emergency/burst-pipe-repair" },
                { name: "Severe Leak Detection", icon: Zap, image: leakDetectionImg },
                { name: "Gas Leak Fixes", icon: Flame, image: gasLeakImg },
                { name: "Overflowing Toilets", icon: Home, image: overflowingToiletImg },
            ]
        },
        {
            id: "residential",
            title: "Residential Plumbing",
            description: "Complete care for your home's water systems. Clean, respectable, and efficient.",
            color: "text-blue-600",
            services: [
                { name: "Water Heater Install", icon: Thermometer, image: waterHeaterImg },
                { name: "Drain Cleaning", icon: Droplets, image: drainCleaningImg },
                { name: "Fixture Updates", icon: Wrench, image: fixtureUpdatesImg },
                { name: "Sewer Line Repair", icon: Hammer, image: sewerLineImg },
            ]
        },
        {
            id: "commercial",
            title: "Commercial Solutions",
            description: "Scalable plumbing infrastructure for businesses, offices, and industrial sites.",
            color: "text-amber-600",
            services: [
                { name: "Backflow Prevention", icon: ShieldCheck, image: backflowImg },
                { name: "Grease Trap Cleaning", icon: Droplets, image: greaseTrapImg },
                { name: "Hydro Jetting", icon: Zap, image: hydroJettingImg },
                { name: "System Maintenance", icon: Building2, image: maintenanceImg },
            ]
        }
    ];

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-surface min-h-screen overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Hero Header */}
                <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="text-left">
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0d2b26] mb-8 leading-tight">
                            Mastery in <br /> <span className="text-[var(--color-primary)]">Every Drop.</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light mb-10 max-w-xl">
                            We don't just fix pipes; we engineer solutions. Explore our comprehensive suite of premium plumbing services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => navigate('/booking')}
                                className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-[#266658] transition-all transform hover:-translate-y-1"
                            >
                                Book a Service
                            </button>
                            <button className="bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
                                <Phone className="w-5 h-5" />
                                +1 (555) 123-4567
                            </button>
                        </div>
                    </div>

                    {/* Feature Grid (Replaces Hero Image) */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 p-4">
                        {/* Abstract Background Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-secondary)]/5 blur-3xl rounded-full -z-10" />

                        {/* Card 1: 24/7 */}
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 group md:translate-y-8">
                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif font-bold text-[#0d2b26] text-xl">24/7 Emergency</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Rapid Response</p>
                            </div>
                        </div>

                        {/* Card 2: Satisfaction */}
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                                <Star className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif font-bold text-[#0d2b26] text-xl">5-Star Rated</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Customer Choice</p>
                            </div>
                        </div>

                        {/* Card 3: Licensed */}
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 group md:translate-y-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif font-bold text-[#0d2b26] text-xl">Fully Licensed</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">100% Insured</p>
                            </div>
                        </div>

                        {/* Card 4: Equipment */}
                        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 group">
                            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                <Wrench className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-serif font-bold text-[#0d2b26] text-xl">Pro Equipment</h3>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">High Precision</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Categories */}
                <div className="space-y-40">
                    {categories.map((category, idx) => (
                        <div key={idx} id={category.id} className="service-category scroll-mt-32">
                            {/* Category Header */}
                            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-b border-gray-200 pb-8">
                                <div className="max-w-xl">
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] mb-4">
                                        {category.title}
                                    </h2>
                                    <p className="text-lg text-gray-500 font-light">
                                        {category.description}
                                    </p>
                                </div>
                                <button className={`hidden md:flex items-center gap-2 ${category.color} font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all group`}>
                                    View All <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Services Image Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.services.map((service, sIdx) => (
                                    <div
                                        key={sIdx}
                                        id={service.name.replace(/\s+/g, '-').toLowerCase()}
                                        onClick={() => service.link && navigate(service.link)}
                                        className="service-card group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 scroll-mt-32"
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 bg-gray-200">
                                            <img
                                                src={service.image}
                                                alt={service.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-300">
                                                    <service.icon className="w-5 h-5" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                                    {service.name}
                                                </h3>
                                                <div className="h-0.5 w-12 bg-[var(--color-secondary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Process Section */}
                <div className="mt-40 mb-40">
                    <div className="text-center mb-24">
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26]">
                            The Gold Standard Process
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

                        {[
                            { step: "01", title: "Diagnosis", desc: "Advanced leak detection & root cause analysis." },
                            { step: "02", title: "Quote", desc: "Transparent, upfront pricing with no hidden fees." },
                            { step: "03", title: "Action", desc: "Precision repair using state-of-the-art tools." },
                            { step: "04", title: "Restore", desc: "Thorough cleanup and system stress-testing." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative bg-surface pt-4 md:pt-0 group">
                                <div className="w-24 h-24 mx-auto bg-white rounded-full border-4 border-surface shadow-lg flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] mb-6 z-10 relative group-hover:scale-110 transition-transform duration-300">
                                    {item.step}
                                </div>
                                <div className="text-center px-4">
                                    <h3 className="text-xl font-bold text-[#0d2b26] mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ / Featurette Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
                    <div>
                        <span className="text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] mb-8 leading-tight">
                            Beyond Just <br /> Fixing Pipes.
                        </h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                            We believe plumbing is the circulatory system of your property. We treat it with the medical-grade precision it deserves.
                        </p>

                        <div className="space-y-6">
                            {[
                                { question: "Do you offer emergency services?", answer: "Yes, we have a dedicated 24/7 rapid response team for bursts and leaks." },
                                { question: "Are your plumbers licensed?", answer: "Absolutely. Every team member is fully licensed, insured, and background-checked." },
                                { question: "What is your warranty policy?", answer: "We stand by our craftsmanship with a 1-year unparalleled workmanship warranty." }
                            ].map((faq, idx) => (
                                <div key={idx} className="border-b border-gray-200 pb-6">
                                    <h4 className="text-lg font-bold text-[#0d2b26] mb-2 cursor-pointer hover:text-[var(--color-primary)] transition-colors">
                                        {faq.question}
                                    </h4>
                                    <p className="text-gray-500 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                        <img
                            src={burstPipeImg}
                            alt="Quality Assurance"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#0d2b26]/40 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white cursor-pointer hover:scale-110 transition-transform">
                                <ArrowRight className="w-8 h-8" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="inline-block relative group cursor-pointer">
                        <div className="absolute inset-0 bg-[var(--color-primary)] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity rounded-full"></div>
                        <div className="relative bg-white border border-gray-100 rounded-full px-10 py-6 flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform duration-300">
                            <Clock className="w-6 h-6 text-[var(--color-secondary)]" />
                            <div className="text-left">
                                <span className="block font-bold text-[#0d2b26] text-lg">Have a custom request?</span>
                                <span className="text-sm text-gray-500">We specialize in unique plumbing challenges.</span>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white ml-4 group-hover:rotate-45 transition-transform duration-300">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
