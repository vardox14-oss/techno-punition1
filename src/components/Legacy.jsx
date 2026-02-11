import React from 'react';
import ScrollReveal from './ScrollReveal';

const Legacy = () => {
    return (
        <section id="legacy" className="section legacy-section">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Héritage & Impact</h2>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="legacy-content-wrapper">
                        <div className="legacy-text">
                            <h3>Une Révolution Industrielle</h3>
                            <p>
                                Les améliorations apportées par Watt ont transformé la machine à vapeur,
                                passant d'un outil marginal à la force motrice de la Révolution Industrielle.
                                Son travail a permis la mécanisation des usines, le développement des chemins de fer
                                et a changé à jamais la face du monde.
                            </p>

                            <div className="legacy-highlight">
                                <h4>L'unité "Watt"</h4>
                                <p>
                                    En hommage à ses travaux pionniers, l'unité internationale de puissance du
                                    Système international (SI) a été nommée le <strong>Watt (W)</strong> en 1882.
                                </p>
                            </div>
                        </div>

                        <div className="legacy-images">
                            <div className="legacy-img-card">
                                <img src="/src/assets/statue.jpg" alt="Statue de James Watt" />
                                <span>Statue mémoriale</span>
                            </div>
                            <div className="legacy-img-card">
                                <img src="/src/assets/tower.jpg" alt="Watt Institution" />
                                <span>Watt Institution</span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <style>{`
        .legacy-section {
          background: linear-gradient(to bottom, var(--color-bg), #000);
          color: #fff;
        }
        .legacy-content-wrapper {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        .legacy-text {
          flex: 1;
        }
        .legacy-text h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--color-accent);
        }
        .legacy-text p {
          margin-bottom: 2rem;
          color: #ccc;
          font-size: 1.1rem;
        }
        .legacy-highlight {
          background: rgba(192, 128, 64, 0.1);
          border-left: 4px solid var(--color-accent);
          padding: 2rem;
          border-radius: 0 8px 8px 0;
        }
        .legacy-highlight h4 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        
        .legacy-images {
          flex: 1;
          display: flex;
          gap: 1rem;
        }
        .legacy-img-card {
           flex: 1;
           position: relative;
        }
        .legacy-img-card img {
          width: 100%;
          border-radius: 8px;
          height: 300px;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.5s ease;
        }
        .legacy-img-card:hover img {
          filter: grayscale(0%);
        }
        .legacy-img-card span {
           display: block;
           text-align: center;
           margin-top: 0.5rem;
           font-family: var(--font-display);
           color: var(--color-text-muted);
        }
        
        @media (max-width: 768px) {
          .legacy-content-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
        </section>
    );
};

export default Legacy;
