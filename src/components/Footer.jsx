import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Biographie James Watt. Projet Éducatif.</p>
                <p className="footer-small">Conçu avec React.</p>
            </div>
            <style>{`
        .footer {
          background: #000;
          padding: 2rem 0;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .footer p {
          color: var(--color-text-muted);
        }
        .footer-small {
            font-size: 0.8rem;
            margin-top: 0.5rem;
            opacity: 0.5;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
