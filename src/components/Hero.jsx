import React from 'react';
import { ArrowDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="hero-overlay"></div>
                <img
                    src="/src/assets/watt_hero.jpg"
                    alt="James Watt Portrait"
                    className="hero-image"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                    }}
                />
            </div>

            <div className="container hero-content">
                <ScrollReveal>
                    <h1 className="hero-title">
                        James <span className="text-accent">Watt</span>
                    </h1>
                    <p className="hero-subtitle">
                        L'ingénieur qui a propulsé la <br />
                        Révolution Industrielle
                    </p>
                    <p className="hero-dates">1736 — 1819</p>

                    <button
                        className="scroll-btn"
                        onClick={() => {
                            document.getElementById('biography')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="scroll-text">Découvrir son histoire</span>
                        <ArrowDown className="scroll-icon" size={20} />
                    </button>
                </ScrollReveal>
            </div>

            <style>{`
        .hero-section {
          height: 100vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.6; /* Dim the image for text readability */
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(18,18,18,0.4) 0%, rgba(18,18,18,1) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative;
          text-align: center;
          z-index: 2;
        }
        .hero-title {
          font-size: 5rem;
          margin-bottom: 1rem;
          letter-spacing: -2px;
          text-transform: uppercase;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          font-weight: 300;
        }
        .hero-dates {
          font-family: var(--font-display);
          font-size: 1.2rem;
          color: var(--color-accent);
          margin-bottom: 4rem;
          opacity: 0.8;
          letter-spacing: 2px;
        }
        .scroll-btn {
          background: transparent;
          color: var(--color-text);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 1rem 2rem;
          border-radius: 50px;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        .scroll-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--color-accent);
          color: var(--color-accent);
          transform: translateY(-2px);
        }
        .scroll-icon {
          animation: bounce 2s infinite;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-5px);}
          60% {transform: translateY(-3px);}
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
          .hero-subtitle { font-size: 1.1rem; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
