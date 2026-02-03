import React from 'react';
import { Droplets, Wrench, ThermometerSun } from 'lucide-react';
import imgHero from '../../assets/hero_professional.png';

// Reusable Hero Component (Animated Hydro-Flow + Floating Cards)
const Hero = ({
    trustBadge,
    headline,
    subtitle,
    buttons,
    className = ""
}) => {
    return (
        <div className={`relative w-full min-h-screen overflow-hidden bg-[#0d2b26] flex items-center ${className}`}>
            <style>{`
        @keyframes flow-1 {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        @keyframes flow-2 {
          0% { transform: translateX(0); }
          50% { transform: translateX(25%); }
          100% { transform: translateX(0); }
        }
        @keyframes rise {
          0% { bottom: -20px; transform: translateX(0); opacity: 0; }
          40% { opacity: 0.6; }
          100% { bottom: 100vh; transform: translateX(-50px); opacity: 0; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-flow-1 { animation: flow-1 15s ease-in-out infinite; }
        .animate-flow-2 { animation: flow-2 20s ease-in-out infinite; }
        .animate-rise { animation: rise infinite linear; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-float-medium { animation: float 5s ease-in-out infinite; }
        .animate-float-fast { animation: float 4s ease-in-out infinite; }
        
        /* Particle Delays */
        .bubble:nth-child(1) { left: 10%; animation-duration: 8s; animation-delay: 2s; width: 10px; height: 10px; }
        .bubble:nth-child(2) { left: 20%; animation-duration: 10s; animation-delay: 0s; width: 15px; height: 15px; }
        .bubble:nth-child(3) { left: 35%; animation-duration: 12s; animation-delay: 4s; width: 8px; height: 8px; }
        .bubble:nth-child(4) { left: 50%; animation-duration: 9s; animation-delay: 1s; width: 12px; height: 12px; }
        .bubble:nth-child(5) { left: 65%; animation-duration: 11s; animation-delay: 3s; width: 18px; height: 18px; }
        .bubble:nth-child(6) { left: 80%; animation-duration: 13s; animation-delay: 5s; width: 14px; height: 14px; }
      `}</style>

            {/* --- Background Elements --- */}

            {/* Deep Water Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a5f52] via-[#0f2924] to-[#0a1f1b]" />

            {/* Decorative Dot Pattern (Texture) */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }} />

            {/* Rising Bubbles (CSS Particles) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bubble absolute bottom-0 bg-white/10 rounded-full animate-rise backdrop-blur-sm" />
                ))}
            </div>

            {/* Animated SVG Waves (Bottom) */}
            <div className="absolute bottom-0 left-0 w-[200%] h-32 md:h-48 pointer-events-none z-0">
                <svg className="absolute bottom-0 w-full h-full animate-flow-2 opacity-40 mix-blend-soft-light" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#2F7D6D" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <svg className="absolute bottom-0 w-full h-full animate-flow-1 opacity-60" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#4CAF50" fillOpacity="0.2" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* --- Floating Background Icons (Visual Filler) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Droplets className="absolute top-[15%] left-[10%] text-white/10 w-24 h-24 animate-float-slow" />
                <Wrench className="absolute bottom-[20%] left-[5%] text-white/10 w-32 h-32 animate-float-medium rotate-45" />
                <div className="absolute top-[20%] right-[10%] text-[var(--color-secondary)]/10 text-9xl font-bold font-serif opacity-20 animate-float-fast rotate-12">
                    &
                </div>
                <div className="absolute bottom-[10%] right-[20%] w-60 h-60 bg-[var(--color-secondary)]/10 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* --- Hero Content (Split Layout) --- */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 w-full h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* LEFT COLUMN: Text Content (Wider) */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                        {/* Trust Badge */}
                        {trustBadge && (
                            <div className="flex justify-center lg:justify-start mb-4 animate-[fade-in-up_0.8s_ease-out_forwards]">
                                <div className="flex items-center gap-3 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-xl hover:bg-white/10 transition-colors">
                                    <span className="text-gray-100 font-semibold tracking-wide uppercase text-xs">{trustBadge.text}</span>
                                    {trustBadge.icons && (
                                        <div className="flex text-[var(--color-secondary)] gap-0.5 text-xs">
                                            {trustBadge.icons.map((icon, index) => (
                                                <span key={index}>{icon}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Headlines (Premium Serif & Gold) */}
                        <div className="space-y-4">
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] animate-[scale-in_1s_ease-out_forwards] drop-shadow-lg">
                                {headline.line1}
                            </h1>
                            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] via-[#FDBA74] to-[var(--color-secondary)] tracking-tight leading-[1.1] animate-[scale-in_1s_ease-out_forwards_0.2s] opacity-0 pb-2 drop-shadow-sm whitespace-nowrap">
                                {headline.line2}
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-lg text-gray-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 animate-[fade-in-up_0.8s_ease-out_forwards_0.4s] opacity-0 border-l-2 border-[var(--color-secondary)] pl-4">
                            {subtitle}
                        </p>

                        {/* Useful Features List (Glass Pills) */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 animate-[fade-in-up_0.8s_ease-out_forwards_0.5s] opacity-0">
                            {["Licensed & Insured", "Upfront Pricing", "Same-Day Service", "5-Star Rated"].map((feature, i) => (
                                <div key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105 cursor-default">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_var(--color-secondary)]" />
                                    <span className="text-sm font-medium text-gray-100">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons (Refined) */}
                        {buttons && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8 animate-[fade-in-up_0.8s_ease-out_forwards_0.6s] opacity-0">
                                {buttons.primary && (
                                    <button
                                        onClick={buttons.primary.onClick}
                                        className="relative px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--color-secondary)] overflow-hidden group"
                                    >
                                        <span className="relative z-10">{buttons.primary.text}</span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-300 transform skew-x-12" />
                                    </button>
                                )}
                                {buttons.secondary && (
                                    <button
                                        onClick={buttons.secondary.onClick}
                                        className="px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#0d2b26]"
                                    >
                                        {buttons.secondary.text}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>


                    {/* RIGHT COLUMN: Single Hero Image (Narrower) */}
                    <div className="hidden lg:block lg:col-span-5 relative h-full w-full flex items-center justify-center animate-[fade-in-up_1s_ease-out_forwards_0.5s] opacity-0 translate-y-12 translate-x-12">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Glow Effect behind image */}
                            <div className="absolute inset-0 bg-[var(--color-secondary)]/20 rounded-full blur-[100px] animate-pulse" />

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float-slow">
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent z-10" />
                                <img
                                    src={imgHero}
                                    alt="Professional Plumber"
                                    className="w-full h-full object-cover"
                                />

                                {/* Floating Badge on Image */}
                                <div className="absolute bottom-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Official Partner</div>
                                        <div className="text-green-400 text-xs">Verified Expert</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
