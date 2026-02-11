import React from 'react';
import ScrollReveal from './ScrollReveal';
import ruins from '../assets/ruins.jpg';

const Biography = () => {
    return (
        <section id="biography" className="section bio-section">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Biographie</h2>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bio-grid">
                        <div className="bio-content">
                            <h3 className="bio-subtitle">Jeunesse et Formation</h3>
                            <p>
                                James Watt est né le <strong>19 janvier 1736</strong> à Greenock, en Écosse.
                                Enfant de santé fragile, il fut principalement éduqué à domicile par sa mère,
                                développant très tôt une grande dextérité manuelle et un talent pour les mathématiques.
                            </p>
                            <p>
                                À 18 ans, il partit pour Londres étudier la fabrication d'instruments.
                                De retour en Écosse, il s'installa à <strong>l'Université de Glasgow</strong> en tant
                                que fabricant d'instruments mathématiques, où il commença à s'intéresser à la technologie de la vapeur.
                            </p>
                            <p className="quote">
                                "Je ne peux rien faire d'autre que de penser à mes machines."
                            </p>
                        </div>

                        <div className="bio-image-container">
                            <img
                                src={ruins}
                                alt="Lieu historique lié à Watt"
                                className="bio-image"
                                onError={(e) => { e.target.style.display = 'none'; }}
                            />
                            <div className="bio-image-caption">Les racines écossaises</div>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="bio-grid reverse">
                        <div className="bio-content">
                            <h3 className="bio-subtitle">Vie Personnelle & Caractère</h3>
                            <p>
                                Watt était un homme réfléchi, souvent sujet à la mélancolie, mais un scientifique
                                d'une rigueur absolue. Membre éminent de la <strong>Lunar Society</strong> de Birmingham,
                                il échangeait avec les plus grands esprits de son temps.
                            </p>
                            <p>
                                Il se maria deux fois, d'abord avec Margaret Miller, puis avec Ann MacGregor,
                                et eut plusieurs enfants. Il prit sa retraite en 1800, riche et célèbre,
                                avant de s'éteindre en 1819 à Handsworth.
                            </p>
                        </div>
                        <div className="bio-stats">
                            <div className="stat-card">
                                <h4>1736</h4>
                                <span>Naissance</span>
                            </div>
                            <div className="stat-card">
                                <h4>83</h4>
                                <span>Ans</span>
                            </div>
                            <div className="stat-card">
                                <h4>1819</h4>
                                <span>Décès</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <style>{`
        .bio-section {
          background-color: var(--color-surface);
        }
        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        .bio-grid.reverse {
            direction: rtl; /* simple way to reverse, but check content */
        }
        .bio-grid.reverse > * {
            direction: ltr;
        }
        
        .bio-content p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--color-text);
        }
        .bio-subtitle {
          font-size: 1.8rem;
          color: var(--color-accent);
          margin-bottom: 1.5rem;
          font-family: var(--font-display);
        }
        .bio-image-container {
          position: relative;
        }
        .bio-image {
          width: 100%;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          filter: sepia(20%); /* Old photo feel */
          transition: transform 0.3s ease;
        }
        .bio-image:hover {
          transform: scale(1.02);
          filter: sepia(0%);
        }
        .bio-image-caption {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--color-bg);
          padding: 1rem;
          border: 1px solid var(--color-accent);
          color: var(--color-accent);
          font-family: var(--font-display);
        }
        .quote {
          font-style: italic;
          border-left: 3px solid var(--color-accent);
          padding-left: 1rem;
          margin-top: 2rem;
          color: var(--color-text-muted);
        }
        
        .bio-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
        .stat-card {
            background: var(--color-bg);
            padding: 1.5rem;
            text-align: center;
            border: 1px solid rgba(255,255,255,0.05);
        }
        .stat-card h4 {
            font-size: 2rem;
            color: var(--color-accent);
            margin-bottom: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .bio-grid.reverse {
             direction: ltr;
          }
        }
      `}</style>
        </section>
    );
};

export default Biography;
