import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation, Search, CheckCircle2, ArrowRight, Building, Home, Truck } from 'lucide-react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
// Reusing backgrounds/assets for consistency
// You can add distinct area images later
import heroProfessionalImg from '../assets/hero_professional.png';

gsap.registerPlugin(ScrollTrigger);

const Areas = () => {
    const containerRef = useRef(null);
    const [zipCode, setZipCode] = useState('');
    const [checkStatus, setCheckStatus] = useState(null); // 'idle', 'checking', 'available', 'unavailable'

    useGSAP(() => {
        // Staggered entry for cards
        gsap.from('.area-card', {
            y: 50,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.area-grid',
                start: "top 90%"
            }
        });
    }, { scope: containerRef });

    const handleCheck = (e) => {
        e.preventDefault();
        setCheckStatus('checking');
        // Mock API simulation
        setTimeout(() => {
            setCheckStatus('available');
        }, 1500);
    };

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-surface min-h-screen overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-secondary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-1/2 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute top-1/2 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-32">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                        Service Coverage
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0d2b26] mb-8 leading-tight">
                        We Come <span className="text-[var(--color-primary)]">To You.</span> <br /> Wherever You Are.
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto mb-12">
                        From the bustling downtown core to the quietest suburbs, our fleet is stationed for rapid deployment across the entire region.
                    </p>

                    {/* Interactive Zip Checker */}
                    <div className="bg-white p-2 rounded-full shadow-2xl max-w-lg mx-auto flex items-center border border-gray-100 relative z-10">
                        <div className="pl-6 text-gray-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Enter your Zip Code..."
                            className="flex-1 px-4 py-3 outline-none text-[#0d2b26] font-medium"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                        <button
                            onClick={handleCheck}
                            className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#266658] transition-all flex items-center gap-2"
                        >
                            {checkStatus === 'checking' ? 'Checking...' : 'Check Availability'}
                            {!checkStatus && <ArrowRight className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Check Result Message */}
                    {checkStatus === 'available' && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-2 rounded-full font-bold animate-in fade-in slide-in-from-top-2">
                            <CheckCircle2 className="w-5 h-5" /> Great News! You are in our Priority Zone.
                        </div>
                    )}
                </div>

                {/* Nationwide Coverage Section */}
                <div className="mb-40">
                    <div className="text-center mb-16">
                        <span className="text-[var(--color-primary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                            Nationwide Network
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] mb-6">
                            Operational Across All Regions
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                            Our certified rapid-response teams are strategically positioned in 4 major sectors to guarantee service availability anywhere in the US.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                region: "Western Region",
                                states: ["California", "Oregon", "Washington", "Nevada", "Arizona", "Idaho", "Utah", "Montana", "Wyoming", "Colorado", "New Mexico", "Alaska", "Hawaii"]
                            },
                            {
                                region: "Midwest Region",
                                states: ["Illinois", "Ohio", "Michigan", "Indiana", "Wisconsin", "Minnesota", "Missouri", "Iowa", "Kansas", "Nebraska", "North Dakota", "South Dakota"]
                            },
                            {
                                region: "Southern Region",
                                states: ["Texas", "Florida", "Georgia", "North Carolina", "Virginia", "Tennessee", "Louisiana", "Alabama", "Kentucky", "South Carolina", "Oklahoma", "Arkansas", "Mississippi", "West Virginia", "Delaware", "Maryland"]
                            },
                            {
                                region: "Northeast Region",
                                states: ["New York", "Pennsylvania", "New Jersey", "Massachusetts", "Connecticut", "Maine", "Rhode Island", "New Hampshire", "Vermont"]
                            }
                        ].map((sector, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#0d2b26] flex items-center justify-center text-white font-serif font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0d2b26]">{sector.region}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {sector.states.map((state, sIdx) => (
                                        <li key={sIdx} className="text-gray-500 text-sm font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                                            <span className="w-1 h-1 bg-[var(--color-primary)] rounded-full opacity-50 text-[10px]"></span>
                                            {state}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 bg-[#0d2b26]/5 px-6 py-3 rounded-full text-[#0d2b26] font-medium text-sm">
                            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)]" />
                            <span>All locations fully licensed & insured under local regulations.</span>
                        </div>
                    </div>
                </div>

                {/* Map Visual / Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[#0d2b26] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        {/* Abstract map lines could go here using SVG */}
                        <svg width="100%" height="100%">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                            Our Fleet
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Smart Dispatching. <br />Faster Arrivals.
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            We use GPS-enabled dispatching to send the nearest fully-stocked van to your door. No waiting for a tech to cross town.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex-1 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-1">12</div>
                                <div className="text-xs text-gray-300 uppercase">Mobile Units</div>
                            </div>
                            <div className="flex-1 bg-white/10 backdrop-blur-md p-4 rounded-xl">
                                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-1">98%</div>
                                <div className="text-xs text-gray-300 uppercase">On-Time Rate</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 group z-0">
                        <MapContainer
                            center={[40.7128, -74.0060]} // Default to NYC coordinates placeholder
                            zoom={13}
                            style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
                            scrollWheelZoom={false}
                            zoomControl={false}
                        >
                            {/* Dark Mode CartoDB Tile Layer for premium feel */}
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                            />
                            {/* Animated Pulse Marker for "HQ" */}
                            <CircleMarker
                                center={[40.7128, -74.0060]}
                                radius={8}
                                pathOptions={{ color: 'white', fillColor: '#10b981', fillOpacity: 0.9, weight: 2 }}
                            >
                                <Popup className="font-sans">
                                    <strong className="text-emerald-700">HQ - Dispatch Center</strong><br />
                                    Active & Online
                                </Popup>
                            </CircleMarker>

                            <CircleMarker
                                center={[40.7328, -73.9960]}
                                radius={4}
                                pathOptions={{ color: 'white', fillColor: '#10b981', fillOpacity: 0.6, weight: 1 }}
                            />
                            <CircleMarker
                                center={[40.6928, -74.0260]}
                                radius={4}
                                pathOptions={{ color: 'white', fillColor: '#10b981', fillOpacity: 0.6, weight: 1 }}
                            />
                        </MapContainer>

                        {/* Live Status Badge Overlay */}
                        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 z-[1000]">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-bold uppercase tracking-wider text-white">Live Dispatch</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Areas;
