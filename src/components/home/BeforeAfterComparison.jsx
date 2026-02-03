import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

// Images
import imgBefore from '../../assets/before.jpeg';
import imgAfter from '../../assets/after.jpeg';

const BeforeAfterComparison = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    // Placeholder Images (Unsplash)
    const beforeImage = imgBefore; // Rusty/Industrial placeholder
    const afterImage = imgAfter;   // Clean/Modern placeholder

    const handleMove = (event) => {
        if (!isDragging || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = event.touches ? event.touches[0].clientX : event.clientX;

        // Calculate position percentage
        let position = ((clientX - containerRect.left) / containerRect.width) * 100;

        // Clamp between 0 and 100
        position = Math.max(0, Math.min(100, position));

        setSliderPosition(position);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Global event listeners for drag release outside container
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleMove);
            window.addEventListener('touchend', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--color-secondary)] font-bold tracking-widest text-xs uppercase mb-3 block">
                        Real Results
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0d2b26] leading-tight mb-6">
                        See The Transformation.
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                        Drag the slider to reveal how we turn plumbing disasters into pristine, efficient systems.
                    </p>
                </div>

                {/* Slider Container */}
                <div
                    ref={containerRef}
                    className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* AFTER Image (Background - The "Base") */}
                    <img
                        src={afterImage}
                        alt="After - New Plumbing"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 text-white font-bold text-sm z-10">
                        AFTER
                    </div>

                    {/* BEFORE Image (Clipped Overlay) */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src={beforeImage}
                            alt="Before - Old Plumbing"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-white font-bold text-sm z-10">
                            BEFORE
                        </div>
                    </div>

                    {/* Slider Handler Line */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        {/* Circle Handle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-secondary)]">
                            <MoveHorizontal className="w-6 h-6" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BeforeAfterComparison;
