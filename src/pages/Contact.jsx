import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useGSAP(() => {
        // Entry animations
        const tl = gsap.timeline();

        tl.from('.contact-header', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
            .from('.contact-info-card', {
                x: -30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4")
            .from('.contact-form', {
                x: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.6");

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-surface min-h-screen relative overflow-hidden">
            {/* Background Blooms */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16 contact-header">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0d2b26] mb-6">
                        We're Here <span className="text-[var(--color-primary)]">24/7.</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                        Whether it's a midnight emergency or a planned renovation, our team is ready to answer your call.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        {/* Emergency Card */}
                        <div className="contact-info-card bg-[#0d2b26] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Emergency Hotline</h3>
                                        <p className="text-gray-400">Rapid response for urgent issues.</p>
                                    </div>
                                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-4xl font-bold tracking-tight mb-4">
                                    (555) 123-4567
                                </div>
                                <div className="inline-flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-wider">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    Dispatch Active Now
                                </div>
                            </div>
                        </div>

                        {/* Standard Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="contact-info-card bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] mb-6">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-[#0d2b26] mb-2">Email Us</h4>
                                <p className="text-gray-500 text-sm mb-4">For quotes & general questions.</p>
                                <a href="mailto:hello@plumbing.com" className="text-[var(--color-primary)] font-bold hover:underline">hello@plumbing.com</a>
                            </div>

                            <div className="contact-info-card bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center text-[var(--color-secondary)] mb-6">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h4 className="text-lg font-bold text-[#0d2b26] mb-2">HQ Location</h4>
                                <p className="text-gray-500 text-sm mb-4">123 Industrial Way, Suite 100<br />Cityville, ST 12345</p>
                                <a href="#" className="text-[var(--color-secondary)] font-bold hover:underline flex items-center gap-1">
                                    Get Directions <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="contact-info-card bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <Clock className="w-6 h-6 text-gray-400" />
                                <h3 className="text-xl font-bold text-[#0d2b26]">Operating Hours</h3>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-semibold text-gray-700">Emergency Service</span>
                                    <span className="font-bold text-green-600">24 Hours / 7 Days</span>
                                </div>
                                <div className="w-full h-px bg-gray-100"></div>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>Mon - Fri (Office)</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>Saturday (Office)</span>
                                    <span>9:00 AM - 2:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Support & FAQ */}
                    <div className="contact-form space-y-8">

                        {/* Booking CTA Card */}
                        <div className="bg-[#0d2b26] text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden text-center md:text-left text-white">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                                    New Feature
                                </span>
                                <h3 className="text-3xl font-serif font-bold mb-4 text-white">Ready to Schedule?</h3>
                                <p className="text-gray-300 mb-8 text-lg">
                                    For non-emergency repairs, booking online is the fastest way to secure your slot.
                                </p>
                                <button
                                    onClick={() => navigate('/booking')}
                                    className="bg-[var(--color-primary)] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#266658] transition-all w-full md:w-auto flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    Book Appointment Online
                                </button>
                                <p className="mt-4 text-xs text-gray-400 font-medium uppercase tracking-wider">
                                    Coming Soon • New Booking Portal
                                </p>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#0d2b26] mb-8 flex items-center gap-3">
                                <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />
                                Common Questions
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { q: "Do you charge for travel?", a: "We have a flat-rate dispatch fee that is waived if you proceed with any repair work." },
                                    { q: "Are you licensed and insured?", a: "Yes, we are fully licensed in all 50 states and carry comprehensive liability insurance." },
                                    { q: "What is your warranty policy?", a: "We stand by our craftsmanship with a 5-year warranty on all labor and parts." },
                                    { q: "Do you offer financing?", a: "We partner with major lenders to offer 0% interest financing for 12 months on major installs." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                        <div className="font-bold text-[#0d2b26] mb-2 group-hover:text-[var(--color-primary)] transition-colors cursor-default">
                                            {item.q}
                                        </div>
                                        <div className="text-gray-500 text-sm leading-relaxed">
                                            {item.a}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
