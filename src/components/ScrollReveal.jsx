import React, { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Reveal 
                }
            });
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={domRef}
            className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
