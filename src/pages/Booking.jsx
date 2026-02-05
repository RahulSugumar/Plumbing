import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
    Calendar, Clock, CheckCircle2, ChevronRight, ChevronLeft,
    User, MapPin, Wrench, Droplets, Thermometer, Phone,
    Home, Building2, Flame, Zap, ShieldCheck, Hammer
} from 'lucide-react';

const Booking = () => {
    const containerRef = useRef(null);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        category: null,
        service: null,
        date: null,
        time: null,
        name: '',
        phone: '',
        address: '',
        landmark: ''
    });

    useGSAP(() => {
        gsap.from('.booking-step', {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            clearProps: "all"
        });
    }, { scope: containerRef, dependencies: [step] });

    const categories = [
        { id: 'emergency', title: 'Emergency', icon: Zap, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
        { id: 'residential', title: 'Residential', icon: Home, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
        { id: 'commercial', title: 'Commercial', icon: Building2, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100' }
    ];

    const services = {
        emergency: [
            { id: 'burst-pipe', name: 'Burst Pipe Repair', icon: Droplets },
            { id: 'gas-leak', name: 'Gas Leak Fix', icon: Flame },
            { id: 'overflow', name: 'Overflowing Toilet', icon: Home }
        ],
        residential: [
            { id: 'water-heater', name: 'Water Heater', icon: Thermometer },
            { id: 'drain', name: 'Drain Cleaning', icon: Droplets },
            { id: 'fixture', name: 'Fixture Update', icon: Wrench }
        ],
        commercial: [
            { id: 'backflow', name: 'Backflow Prevention', icon: ShieldCheck },
            { id: 'hydro', name: 'Hydro Jetting', icon: Zap },
            { id: 'maintenance', name: 'System Maintenance', icon: Hammer }
        ]
    };

    const timeSlots = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const renderStep1 = () => (
        <div className="booking-step space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#0d2b26]">What type of service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => {
                            setFormData({ ...formData, category: cat.id });
                            handleNext();
                        }}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center gap-4 hover:shadow-lg ${formData.category === cat.id
                            ? `border-[var(--color-primary)] bg-[var(--color-primary)]/5`
                            : `border-gray-100 bg-white hover:border-[var(--color-primary)]/30`
                            }`}
                    >
                        <div className={`w-16 h-16 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center`}>
                            <cat.icon className="w-8 h-8" />
                        </div>
                        <span className="font-bold text-[#0d2b26]">{cat.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep2 = () => (
        <div className="booking-step space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#0d2b26]">Select Specific Issue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[formData.category]?.map((srv) => (
                    <button
                        key={srv.id}
                        onClick={() => {
                            setFormData({ ...formData, service: srv.name });
                            handleNext();
                        }}
                        className={`p-6 rounded-2xl border-2 transition-all flex items-center gap-4 ${formData.service === srv.name
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                            : "border-gray-100 bg-white hover:border-[var(--color-primary)]/30"
                            }`}
                    >
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[var(--color-primary)]">
                            <srv.icon className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-[#0d2b26] text-lg">{srv.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );

    const renderStep3 = () => (
        <div className="booking-step space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#0d2b26]">Preferred Time</h2>

            {/* Mock Calendar Visual */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6 text-[var(--color-primary)] font-bold">
                    <Calendar className="w-5 h-5" />
                    <span>Select Date</span>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                    {[...Array(14)].map((_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i + 1); // Start from tomorrow
                        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                        const dayNum = date.getDate();
                        const month = date.toLocaleDateString('en-US', { month: 'short' });
                        const fullDate = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

                        // We store the full readable string for simplicity in this demo
                        const isSelected = formData.date === fullDate;

                        return (
                            <button
                                key={i}
                                onClick={() => setFormData({ ...formData, date: fullDate })}
                                className={`flex-shrink-0 w-20 h-24 rounded-2xl flex flex-col items-center justify-center border transition-all ${isSelected
                                    ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] scale-105'
                                    : 'bg-gray-50 text-gray-400 border-transparent hover:bg-gray-100'
                                    }`}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">{month}</span>
                                <span className="text-2xl font-bold my-1">{dayNum}</span>
                                <span className="text-xs font-medium uppercase">{dayName}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="h-px bg-gray-100 my-6"></div>

                <div className="flex items-center gap-2 mb-6 text-[var(--color-secondary)] font-bold">
                    <Clock className="w-5 h-5" />
                    <span>Select Time</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                        <button
                            key={time}
                            onClick={() => {
                                setFormData({ ...formData, time });
                            }}
                            className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all ${formData.time === time
                                ? 'bg-[var(--color-secondary)] text-white border-[var(--color-secondary)]'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-[var(--color-secondary)]'
                                }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <button
                onClick={handleNext}
                disabled={!formData.date || !formData.time}
                className="w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#266658] transition-colors"
            >
                Continue
            </button>
        </div>
    );

    const renderStep4 = () => (
        <div className="booking-step space-y-6">
            <h2 className="text-3xl font-serif font-bold text-[#0d2b26]">Your Details</h2>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input
                                type="text"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all font-medium text-[#0d2b26]"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                            <input
                                type="tel"
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all font-medium text-[#0d2b26]"
                                placeholder="(555) 123-4567"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Address</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                        <input
                            type="text"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all font-medium text-[#0d2b26]"
                            placeholder="123 Street Name"
                            value={formData.address}
                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Landmark (Optional)</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                        <input
                            type="text"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all font-medium text-[#0d2b26]"
                            placeholder="Near City Center Mall"
                            value={formData.landmark}
                            onChange={e => setFormData({ ...formData, landmark: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-[#0d2b26] mb-4">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-medium text-[#0d2b26]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-medium text-[#0d2b26]">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">Time:</span>
                        <span className="font-medium text-[#0d2b26]">{formData.time}</span>
                    </div>
                </div>
            </div>

            <button
                onClick={handleNext}
                className="w-full py-4 bg-[var(--color-primary)] text-white rounded-xl font-bold shadow-xl hover:shadow-2xl hover:bg-[#266658] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
                Confirm Booking <CheckCircle2 className="w-5 h-5" />
            </button>
        </div>
    );

    const renderSuccess = () => (
        <div className="booking-step text-center py-10">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 animate-in zoom-in duration-500">
                <CheckCircle2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-serif font-bold text-[#0d2b26] mb-4">You're Booked!</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
                We've sent a confirmation to your email. One of our experts will be arriving at the scheduled time.
            </p>
            <button
                onClick={() => {
                    setStep(1);
                    setFormData({ category: null, service: null, date: null, time: null, name: '', phone: '', address: '' });
                }}
                className="text-[var(--color-primary)] font-bold hover:underline"
            >
                Book Another Service
            </button>
        </div>
    );

    return (
        <div ref={containerRef} className="pt-24 pb-20 bg-surface min-h-screen">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-4 block">
                        Online Scheduling
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0d2b26]">
                        Book <span className="text-[var(--color-primary)]">Instantly.</span>
                    </h1>
                </div>

                {/* Wizard Container */}
                <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">

                    {/* Progress Bar */}
                    {step < 5 && (
                        <div className="flex gap-2 mb-10">
                            {[1, 2, 3, 4].map((s) => (
                                <div
                                    key={s}
                                    className={`h-2 rounded-full flex-1 transition-all duration-500 ${s <= step ? 'bg-[var(--color-primary)]' : 'bg-gray-100'
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Back Button */}
                    {step > 1 && step < 5 && (
                        <button
                            onClick={handleBack}
                            className="absolute top-8 left-8 p-2 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {step === 1 && renderStep1()}
                    {step === 2 && renderStep2()}
                    {step === 3 && renderStep3()}
                    {step === 4 && renderStep4()}
                    {step === 5 && renderSuccess()}

                </div>
            </div>
        </div>
    );
};

export default Booking;
