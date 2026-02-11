import React from 'react';
import ScrollReveal from './ScrollReveal';
import timelineBg from '../assets/ruins.jpg';

const Timeline = () => {
  const events = [
    { year: '1736', title: 'Naissance', desc: 'À Greenock, Écosse.' },
    { year: '1755', title: 'Formation', desc: 'Apprentissage à Londres.' },
    { year: '1764', title: 'Le Déclic', desc: 'Répare une machine de Newcomen et identifie ses défauts.' },
    { year: '1765', title: 'L\'Invention', desc: 'Conçoit le condenseur séparé lors d\'une promenade.' },
    { year: '1769', title: 'Le Brevet', desc: 'Dépose son premier brevet majeur.' },
    { year: '1774', title: 'Boulton & Watt', desc: 'Partenariat avec Matthew Boulton à Birmingham.' },
    { year: '1784', title: 'Mouvement Parallèle', desc: 'Brevète le mécanisme de mouvement parallèle.' },
    { year: '1800', title: 'Retraite', desc: 'Se retire des affaires.' },
    { year: '1819', title: 'Décès', desc: 'À Handsworth, Angleterre.' },
  ];

  return (
    <section id="timeline" className="section timeline-section">
      <div className="timeline-bg">
        <img src={timelineBg} alt="" />
      </div>

      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Chronologie</h2>
        </ScrollReveal>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {events.map((event, index) => (
            <ScrollReveal key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-year">{event.year}</span>
                <h4 className="timeline-event-title">{event.title}</h4>
                <p>{event.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .timeline-section {
          background-color: var(--color-bg);
          position: relative;
        }
        .timeline-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.1;
            z-index: 0;
            pointer-events: none;
        }
        .timeline-bg img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
          z-index: 1;
        }
        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--color-accent), transparent);
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 50%;
          padding: 0 2rem;
        }
        .timeline-item.left {
          left: 0;
          text-align: right;
        }
        .timeline-item.right {
          left: 50%;
          text-align: left;
        }
        .timeline-marker {
          position: absolute;
          top: 0;
          width: 16px;
          height: 16px;
          background: var(--color-bg);
          border: 2px solid var(--color-accent);
          border-radius: 50%;
          z-index: 2;
        }
        .timeline-item.left .timeline-marker {
          right: -8px;
        }
        .timeline-item.right .timeline-marker {
          left: -8px;
        }
        .timeline-item:hover .timeline-marker {
           background: var(--color-accent);
           box-shadow: 0 0 10px var(--color-accent-glow);
        }
        
        .timeline-content {
          background: rgba(255,255,255,0.03);
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease;
        }
        .timeline-content:hover {
            transform: translateY(-5px);
            background: rgba(255,255,255,0.05);
        }
        
        .timeline-year {
          display: block;
          font-size: 0.9rem;
          color: var(--color-accent);
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .timeline-event-title {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        @media (max-width: 768px) {
          .timeline-line { left: 20px; }
          .timeline-item { width: 100%; padding-left: 3rem; padding-right: 0; text-align: left; }
          .timeline-item.left { left: 0; }
          .timeline-item.right { left: 0; }
          .timeline-item.left .timeline-marker, 
          .timeline-item.right .timeline-marker { left: 12px; right: auto; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
