import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biographie', href: '#biography' },
    { name: 'Chronologie', href: '#timeline' },
    { name: 'Inventions', href: '#inventions' },
    { name: 'Héritage', href: '#legacy' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo" onClick={(e) => handleScrollTo(e, '#hero')}>
          James <span className="text-accent">Watt</span>
        </a>


        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>


        <div className="dev-credit desktop-only">
          dev by <a href="https://portfolio-rkn.pages.dev/" target="_blank" rel="noopener noreferrer" className="vardox-link">vardox58</a>
        </div>


        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="mobile-nav-link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        .text-accent {
          color: var(--color-accent);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
          position: relative;
        }
        .nav-link:hover {
          opacity: 1;
          color: var(--color-accent);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        
        .dev-credit {
            font-size: 0.9rem;
            color: var(--color-text-muted);
            font-family: var(--font-display);
        }
        .vardox-link {
            color: var(--color-accent);
            font-weight: bold;
            text-decoration: none;
            margin-left: 0.3rem;
            transition: opacity 0.3s ease;
        }
        .vardox-link:hover {
            opacity: 0.8;
            text-decoration: underline;
        }

        .vardox-link:hover {
            opacity: 0.8;
            text-decoration: underline;
        }

        .mobile-menu { display: none; }
        .mobile-only { display: none; }
        
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          .mobile-menu-btn {
            background: none;
            color: var(--color-text);
          }
          .mobile-menu {
            position: fixed;
            top: var(--nav-height);
            left: 0;
            width: 100%;
            height: 0;
            background: var(--color-surface);
            overflow: hidden;
            transition: height 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 0;
          }
          .mobile-menu.open {
            height: 100vh;
            padding-top: 2rem;
          }
          .mobile-nav-link {
            font-size: 1.5rem;
            margin: 1rem 0;
            font-family: var(--font-display);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
