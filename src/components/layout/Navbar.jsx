import React from 'react';
import { Home, Wrench, MapPin, User, Phone } from 'lucide-react';
import { TubeLightNavbar } from '../ui/TubeLightNavbar';

const Navbar = () => {
    const navItems = [
        {
            name: 'Home',
            url: '/',
            icon: Home
        },
        {
            name: 'Services',
            url: '/services',
            icon: Wrench,
            subItems: [
                {
                    name: "Emergency Services",
                    items: ["Burst Pipe Repair", "Severe Leak Detection", "Gas Leak Fixes", "Overflowing Toilets"]
                },
                {
                    name: "Residential Plumbing",
                    items: ["Water Heater Install", "Drain Cleaning", "Fixture Updates", "Sewer Line Repair"]
                },
                {
                    name: "Commercial Solutions",
                    items: ["Backflow Prevention", "Grease Trap Cleaning", "Hydro Jetting", "System Maintenance"]
                }
            ]
        },
        { name: 'Areas', url: '/#areas', icon: MapPin },
        { name: 'About', url: '/#about', icon: User },
        { name: 'Contact', url: '/#contact', icon: Phone }
    ];

    return (
        <div className="w-full flex justify-center">
            <TubeLightNavbar items={navItems} />
        </div>
    );
};

export default Navbar;
