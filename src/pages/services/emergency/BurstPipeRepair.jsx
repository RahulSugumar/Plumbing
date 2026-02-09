import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Clock, ShieldCheck, AlertTriangle, ArrowRight } from 'lucide-react';
import BeforeAfterComparison from '../../../components/home/BeforeAfterComparison';

// Images
import burstPipeBefore from '../../../assets/burst repair before.jpeg';
import burstPipeAfter from '../../../assets/burst repair after.jpeg';
import heroImage from '../../../assets/Burst Pipe Repair.jpeg';

const BurstPipeRepair = () => {
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0d2b26] min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#0d2b26] text-white pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#2F7D6D_0%,_transparent_50%)]" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1 mb-6">
                            <AlertTriangle className="w-4 h-4 text-red-500" />
                            <span className="text-red-400 text-xs font-bold uppercase tracking-wider">Emergency Service</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Burst Pipe? <br />
                            <span className="text-[var(--color-secondary)]">We're On Our Way.</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                            Water damage spreads fast. Our rapid-response team is ready 24/7 to stop the leak, repair the pipe, and save your home.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-all transform hover:-translate-y-1 animate-pulse">
                                Call Now: (555) 123-4567
                            </button>
                            <button
                                onClick={() => navigate('/booking')}
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0d2b26] transition-all"
                            >
                                Book Online
                            </button>
                        </div>
                    </div>

                    {/* Hero Visual/Stats */}
                    <div className="relative">
                        {/* Image Container with shapes */}
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                            <img
                                src={heroImage}
                                alt="Plumber repairing burst pipe"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b26]/90 via-transparent to-transparent" />

                            {/* Floating Stats over Image */}
                            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <div className="flex items-center gap-3 mb-1">
                                        <Clock className="w-5 h-5 text-[var(--color-secondary)]" />
                                        <span className="font-bold text-lg">30-60m</span>
                                    </div>
                                    <p className="text-xs text-gray-300">Avg. Arrival</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                    <div className="flex items-center gap-3 mb-1">
                                        <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)]" />
                                        <span className="font-bold text-lg">Lifetime</span>
                                    </div>
                                    <p className="text-xs text-gray-300">Warranty</p>
                                </div>
                            </div>
                        </div>

                        {/* Decor Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--color-secondary)]/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-600/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </section>

            {/* Why It's Critical */}
            <section className="py-24 px-6 bg-surface">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                            Don't Wait
                        </span>
                        <h2 className="text-4xl font-serif font-bold text-[#0d2b26] mb-6">Why Immediate Action Matters</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A burst pipe releases gallons of water per minute. Waiting even an hour can escalate a simple repair into a major restoration project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Structural Damage", desc: "Water weakens support beams and drywall within hours." },
                            { title: "Mold Growth", desc: "Dangerous mold can begin to colonize damp areas in as little as 24 hours." },
                            { title: "Electrical Hazards", desc: "Water intrusion near outlets or wiring poses severe fire and shock risks." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-6">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0d2b26] mb-3">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before & After Section */}
            <BeforeAfterComparison
                beforeImage={burstPipeBefore}
                afterImage={burstPipeAfter}
                title="Restoring Safety & Integrity"
                subtitle="Burst Pipe Repair Results"
                description="Drag the slider to see how we transform a chaotic water emergency into a clean, permanent repair."
                beforeLabel="BURST"
                afterLabel="REPAIRED"
            />

            {/* Process Section */}
            <section className="py-24 px-6 bg-[#0d2b26] text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                                Our Process
                            </span>
                            <h2 className="text-4xl font-serif font-bold mb-8">How We Handle The Crisis</h2>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Immediate Water Shutoff", desc: "We locate and shut off the main water valve to stop the flooding instantly." },
                                    { step: "02", title: "Leak Detection & Access", desc: "We use non-invasive thermal imaging to pinpoint the break behind walls or floors." },
                                    { step: "03", title: "Surgical Repair", desc: "We replace the damaged section with high-grade copper or PEX using precision techniques." },
                                    { step: "04", title: "Pressure Testing", desc: "We test the system at high pressure to ensure the repair is 100% secure before leaving." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className="text-2xl font-bold text-[var(--color-secondary)] opacity-50">{step.step}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                            <p className="text-gray-400 font-light">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            {/* Decorative element or illustration could go here */}
                            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <h3 className="text-6xl font-serif font-bold text-[var(--color-secondary)] mb-2">100%</h3>
                                    <p className="text-xl text-gray-300">Satisfaction Guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-surface">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-[#0d2b26] mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Will you bill my insurance directly?", a: "Yes, we work with all major homeowners' insurance providers and can help document the damage for your claim." },
                            { q: "How much does a burst pipe repair cost?", a: "Costs vary depending on access and severity. We provide an upfront, flat-rate quote before starting any work." },
                            { q: "Do I need to turn off my water?", a: "Yes! If you can safely access it, turn off your main water valve immediately. If not, wait for our technician." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="font-bold text-[#0d2b26] mb-2">{item.q}</h4>
                                <p className="text-gray-500 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BurstPipeRepair;
