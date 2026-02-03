import React from 'react';
import { Home, Wrench, MapPin, User, Phone } from 'lucide-react';
import { TubeLightNavbar } from '../ui/TubeLightNavbar';

const Navbar = () => {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'Services', url: '#services', icon: Wrench },
        { name: 'Areas', url: '#areas', icon: MapPin },
        { name: 'About', url: '#about', icon: User },
        { name: 'Contact', url: '#contact', icon: Phone }
    ];

    return (
        <div className="w-full flex justify-center">
            <TubeLightNavbar items={navItems} />
        </div>
    );
};

export default Navbar;
