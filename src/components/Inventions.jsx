import React from 'react';
import ScrollReveal from './ScrollReveal';

const Inventions = () => {
  const inventions = [
    {
      title: "Le Condenseur Séparé",
      desc: "L'amélioration cruciale. En séparant la condensation de la vapeur du cylindre principal, Watt a réduit la perte d'énergie, rendant la machine immensément plus efficace.",
      img: "/src/assets/condenser.png"
    },
    {
      title: "La Machine à Vapeur",
      desc: "Grâce à ses améliorations, la machine à vapeur est passée d'une simple pompe de mine à un moteur universel capable d'alimenter des usines entières.",
      img: "/src/assets/steam_engine.png"
    },
    {
      title: "L'Atelier de Recherche",
      desc: "Watt ne s'est pas arrêté à la vapeur. Il a inventé une machine à copier les lettres et a mené des recherches sur le blanchiment au chlore.",
      img: "/src/assets/workshop.jpg"
    }
  ];

  return (
    <section id="inventions" className="section inventions-section">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Inventions Majeures</h2>
        </ScrollReveal>

        <div className="inventions-grid">
          {inventions.map((item, index) => (
            <ScrollReveal key={index}>
              <div className="invention-card">
                <div className="card-image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.opacity = '0.5';
                    }}
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .inventions-section {
          background-color: #151515;
        }
        .inventions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .invention-card {
          background: var(--color-surface);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .invention-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          border-color: var(--color-accent);
        }
        .card-image-wrapper {
          height: 200px;
          overflow: hidden;
          background: #000;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .invention-card:hover .card-image {
          transform: scale(1.1);
        }
        .card-content {
          padding: 2rem;
        }
        .card-title {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--color-text);
        }
        .card-desc {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Inventions;
