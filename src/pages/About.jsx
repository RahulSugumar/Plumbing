import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Award, Users, Calendar, CheckCircle2,
    ArrowRight, Heart, Shield, PenTool
} from 'lucide-react';

import missionImg from '../assets/Mission Section.jpeg';
import johnImg from '../assets/John.jpeg';
import sarahImg from '../assets/Sarah.jpeg';
import mikeImg from '../assets/Mike.jpeg';
import img2009 from '../assets/2009.jpeg';
import img2015 from '../assets/2015.jpeg';
import img2020 from '../assets/2020.jpeg';
import img2024 from '../assets/2024.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Stats Counter Animation
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const value = parseInt(stat.getAttribute('data-value'));
            gsap.fromTo(stat,
                { innerText: 0 },
                {
                    innerText: value,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Timeline Animation
        const items = gsap.utils.toArray('.timeline-item');
        items.forEach((item, i) => {
            gsap.from(item, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                }
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-surface min-h-screen overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-0 w-64 h-full border-r border-gray-100/50"></div>
                <div className="absolute top-1/2 right-0 w-64 h-full border-l border-gray-100/50"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Hero Section */}
                <div className="text-center max-w-5xl mx-auto mb-32 relative">
                    {/* Decorative Elements */}
                    <div className="hidden md:block absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 w-32 h-32 border-4 border-[var(--color-primary)]/10 rounded-full animate-spin-slow"></div>
                    <div className="hidden md:block absolute top-10 right-0 -translate-x-full translate-x-[120%] w-24 h-24 bg-[var(--color-secondary)]/10 rounded-full blur-xl"></div>

                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                        Our Story
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#0d2b26] mb-8 leading-tight">
                        Built on Trust. <br /> <span className="text-[var(--color-primary)]">Forged in Steel.</span>
                    </h1>
                    <p className="text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                        We started with a single van and a wrench. Today, we're the city's most trusted plumbing authority. This is how we got here.
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-40 border-y border-gray-200 py-16 px-4 md:px-12 bg-white/50 backdrop-blur-sm rounded-3xl">
                    {[
                        { label: "Years Experience", value: 15, icon: Calendar },
                        { label: "Projects Completed", value: 5000, icon: CheckCircle2 },
                        { label: "Team Members", value: 24, icon: Users },
                        { label: "Awards Won", value: 12, icon: Award },
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center group cursor-default">
                            <div className="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-[#0d2b26] mb-2 flex justify-center items-baseline">
                                <span className="stat-number" data-value={stat.value}>0</span>
                                <span className="text-2xl text-[var(--color-secondary)]">+</span>
                            </div>
                            <p className="text-gray-500 uppercase tracking-wider text-xs font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-[var(--color-secondary)]/10 rounded-[3rem] -rotate-2"></div>
                        <img
                            src={missionImg}
                            alt="Our Mission"
                            className="relative rounded-[3rem] shadow-2xl w-full h-[700px] object-cover"
                        />
                    </div>
                    <div className="pl-0 md:pl-10">
                        <h2 className="text-5xl font-serif font-bold text-[#0d2b26] mb-8 leading-tight">
                            More Than Just <br /> Fixing Leaks.
                        </h2>
                        <div className="space-y-10">
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-md">
                                    <Heart className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0d2b26] mb-2">Community First</h3>
                                    <p className="text-gray-500 leading-relaxed text-lg">We don't just work in this city; we live here. Every job is an opportunity to improve our neighbors' lives.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 shrink-0 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shadow-md">
                                    <Shield className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0d2b26] mb-2">Uncompromising Safety</h3>
                                    <p className="text-gray-500 leading-relaxed text-lg">We never cut corners. Our protocols exceed industry standards because your safety is non-negotiable.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 shrink-0 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-md">
                                    <PenTool className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0d2b26] mb-2">Craftsmanship</h3>
                                    <p className="text-gray-500 leading-relaxed text-lg">Plumbing is an art. We take pride in clean welds, perfect alignments, and systems that last for decades.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="max-w-7xl mx-auto mb-40 relative">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif font-bold text-[#0d2b26]">Our Journey</h2>
                    </div>

                    {/* Central Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-8 md:left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-transparent opacity-30"></div>

                    <div className="space-y-24">
                        {[
                            {
                                year: "2009",
                                title: "The Beginning",
                                desc: "Founded with one truck and a commitment to honest service.",
                                img: img2009
                            },
                            {
                                year: "2015",
                                title: "Major Expansion",
                                desc: "Opened our commercial division and hired our 10th master plumber.",
                                img: img2015
                            },
                            {
                                year: "2020",
                                title: "Tech Innovation",
                                desc: "Introduced smart-leak detection and paperless dispatching.",
                                img: img2020
                            },
                            {
                                year: "2024",
                                title: "Industry Leader",
                                desc: "Voted #1 Plumbing Service in the region for the 3rd year running.",
                                img: img2024
                            }
                        ].map((item, idx) => (
                            <div key={idx} className={`timeline-item relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Content Side */}
                                <div className="flex-1 pl-20 md:pl-0 text-left md:text-right">
                                    <div className={`${idx % 2 !== 0 ? 'md:text-left' : ''}`}>
                                        <span className="text-6xl font-bold text-[var(--color-primary)]/10 block mb-2 font-serif">{item.year}</span>
                                        <h3 className="text-2xl font-bold text-[#0d2b26] mb-3">{item.title}</h3>
                                        <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--color-secondary)] rounded-full ring-4 ring-white shadow-xl z-10">
                                    <div className="absolute inset-0 bg-[var(--color-secondary)] rounded-full animate-ping opacity-20"></div>
                                </div>

                                {/* Image Side (Was Empty) */}
                                <div className="flex-1 hidden md:block">
                                    <div className={`relative rounded-2xl overflow-hidden shadow-lg border-[6px] border-white transform hover:scale-105 transition-transform duration-500 ${idx % 2 === 0 ? '-rotate-2' : 'rotate-2'}`}>
                                        <div className="absolute inset-0 bg-[var(--color-primary)]/20 z-10 mix-blend-multiply hover:opacity-0 transition-opacity duration-500"></div>
                                        <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-[#0d2b26] mb-4">Meet the Experts</h2>
                        <p className="text-gray-500">The master craftsmen behind every repair.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "John Smith", role: "Master Plumber", img: johnImg },
                            { name: "Sarah Johnson", role: "Service Director", img: sarahImg },
                            { name: "Mike Davis", role: "Lead Technician", img: mikeImg }
                        ].map((member, idx) => (
                            <div key={idx} className="group relative rounded-3xl overflow-hidden cursor-pointer">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b26] via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-[var(--color-secondary)] font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-[var(--color-primary)] rounded-[3rem] p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            Ready to work with the best?
                        </h2>
                        <button className="bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-bold shadow-lg hover:bg-gray-50 transition-colors flex items-center gap-2 mx-auto">
                            Get in Touch <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
