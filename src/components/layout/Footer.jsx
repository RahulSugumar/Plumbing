import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#051111] text-white pt-20 pb-10 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
                                <span className="text-xl font-bold text-white">U</span>
                            </div>
                            <span className="text-2xl font-bold font-display tracking-tight text-white">
                                United<span className="text-[var(--color-secondary)]">Plumbing</span>
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-light">
                            Setting the gold standard for residential and commercial plumbing. Precision, integrity, and 24/7 reliability you can trust.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Services', 'Areas We Serve', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white">Services</h4>
                        <ul className="space-y-4">
                            {['Residential Plumbing', 'Commercial Solutions', 'Emergency Repairs', 'Leak Detection', 'Drain Cleaning', 'Water Heaters'].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-400 hover:text-[var(--color-secondary)] transition-colors block">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold font-display mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-[var(--color-secondary)]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--color-secondary)] font-bold uppercase tracking-wider mb-1">24/7 Emergency</p>
                                    <a href="tel:5551234567" className="text-lg font-bold hover:text-[var(--color-secondary)] transition-colors">(555) 123-4567</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email Us</p>
                                    <a href="mailto:help@unitedplumbing.com" className="text-gray-300 hover:text-white transition-colors">help@unitedplumbing.com</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-gray-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">HQ Location</p>
                                    <p className="text-gray-300">123 Plumber Lane,<br />Metro City, ST 12345</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="h-px bg-white/10 w-full mb-10" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-light">
                    <p>&copy; {new Date().getFullYear()} United Plumbing Co. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
