import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

export function TubeLightNavbar({ items, className }) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(items[0].name);
    const [isMobile, setIsMobile] = useState(false);

    // Sync active tab with current URL path
    useEffect(() => {
        // Find which item matches the current path
        // We match exactly for '/' but maybe startsWith for others if needed?
        // For now, exact match logic or simple mapping:
        const currentItem = items.find(item => item.url === location.pathname);
        if (currentItem) {
            setActiveTab(currentItem.name);
        } else if (location.pathname === '/') {
            // Default to Home if root
            const homeItem = items.find(item => item.url === '/');
            if (homeItem) setActiveTab(homeItem.name);
        }
    }, [location, items]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
                className
            )}
        >
            <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    const hasSubItems = item.subItems && item.subItems.length > 0;

                    return (
                        <div key={item.name} className="relative group">
                            <Link
                                to={item.url}
                                onClick={() => setActiveTab(item.name)}
                                className={cn(
                                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors block",
                                    "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]",
                                    isActive && "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                                )}
                            >
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden">
                                    <Icon size={18} strokeWidth={2.5} />
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="lamp"
                                        className="absolute inset-0 w-full bg-[var(--color-primary)]/5 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[var(--color-primary)] rounded-t-full">
                                            <div className="absolute w-12 h-6 bg-[var(--color-primary)]/20 rounded-full blur-md -top-2 -left-2" />
                                            <div className="absolute w-8 h-6 bg-[var(--color-primary)]/20 rounded-full blur-md -top-1" />
                                            <div className="absolute w-4 h-4 bg-[var(--color-primary)]/20 rounded-full blur-sm top-0 left-2" />
                                        </div>
                                    </motion.div>
                                )}
                            </Link>

                            {/* Level 1 Dropdown (Categories) */}
                            {hasSubItems && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-2 w-64">
                                        {item.subItems.map((subItem, idx) => (
                                            <div key={idx} className="relative group/sub">
                                                {/* Leve 1 Item (Category) */}
                                                <Link
                                                    to={subItem.url}
                                                    className="px-4 py-3 rounded-xl hover:bg-gray-50 cursor-pointer flex justify-between items-center text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                                                >
                                                    {subItem.name}
                                                    {subItem.items && <span className="text-xs text-gray-400">›</span>}
                                                </Link>

                                                {/* Level 2 Flyout (Services) */}
                                                {subItem.items && (
                                                    <div className="absolute top-0 left-full pl-2 hidden group-hover/sub:block w-56">
                                                        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-2 ml-2">
                                                            {subItem.items.map((serviceItem, sIdx) => (
                                                                <Link
                                                                    key={sIdx}
                                                                    to={serviceItem.url}
                                                                    className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-sm text-gray-600 hover:text-[var(--color-primary)] transition-colors"
                                                                >
                                                                    {serviceItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
