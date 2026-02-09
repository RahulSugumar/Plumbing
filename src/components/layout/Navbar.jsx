import React from 'react';
import { Home, Wrench, MapPin, User, Phone, Calendar } from 'lucide-react';
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
                    url: "/services#emergency",
                    items: [
                        { name: "Burst Pipe Repair", url: "/services#burst-pipe-repair" },
                        { name: "Severe Leak Detection", url: "/services#severe-leak-detection" },
                        { name: "Gas Leak Fixes", url: "/services#gas-leak-fixes" },
                        { name: "Overflowing Toilets", url: "/services#overflowing-toilets" }
                    ]
                },
                {
                    name: "Residential Plumbing",
                    url: "/services#residential",
                    items: [
                        { name: "Water Heater Install", url: "/services#water-heater-install" },
                        { name: "Drain Cleaning", url: "/services#drain-cleaning" },
                        { name: "Fixture Updates", url: "/services#fixture-updates" },
                        { name: "Sewer Line Repair", url: "/services#sewer-line-repair" }
                    ]
                },
                {
                    name: "Commercial Solutions",
                    url: "/services#commercial",
                    items: [
                        { name: "Backflow Prevention", url: "/services#backflow-prevention" },
                        { name: "Grease Trap Cleaning", url: "/services#grease-trap-cleaning" },
                        { name: "Hydro Jetting", url: "/services#hydro-jetting" },
                        { name: "System Maintenance", url: "/services#system-maintenance" }
                    ]
                }
            ]
        },

        { name: 'Areas', url: '/areas', icon: MapPin },
        { name: 'About', url: '/about', icon: User },
        { name: 'Contact', url: '/contact', icon: Phone }
    ];

    return (
        <div className="w-full flex justify-center">
            <TubeLightNavbar items={navItems} />
        </div>
    );
};

export default Navbar;
