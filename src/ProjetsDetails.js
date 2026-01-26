import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Button, Ratio, Badge } from 'react-bootstrap';
import { mesProjets } from './projetsData';

const DetailsProjet = () => {
  const { id } = useParams();
  // je cherche l'id du projet
  const projet = mesProjets.find((p) => p.id === id);

  // Remonte en haut de page automatiquement quand on ouvre le détail
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projet) {
    return (
      <Container className="py-5 text-center">
        <h2 className="fw-bold">Oups ! Projet introuvable.</h2>
        <Link to="/" className="btn btn-primary mt-3">Retourner à l'accueil</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      {/* Navigation */}
      <Link to="/" className="text-decoration-none text-secondary d-inline-flex align-items-center mb-4 hover-link">
        <i className="bi bi-arrow-left me-2"></i> Retour au portfolio
      </Link>

      <div className="row g-5">
        {/* PARTIE MÉDIA (VIDÉO OU IMAGE) */}
        <div className="col-lg-9 mx-auto mb-4">
          <div className="rounded-4 overflow-hidden shadow-lg border bg-dark">
            {projet.type === "video" ? (
              <Ratio aspectRatio="16x9">
                <video controls autoPlay muted loop className="w-100 h-100">
                  <source src={projet.videoUrl} type="video/webm" />
                  Votre navigateur ne supporte pas le format WebM.
                </video>
              </Ratio>
            ) : (
              <img src={projet.imageSrc} alt={projet.titre} className="img-fluid w-100" style={{maxHeight: '600px', objectFit: 'cover'}} />
            )}
          </div>
        </div>

        {/* PARTIE TEXTE : TITRE ET DESCRIPTION */}
        <div className="col-lg-8 mx-auto">
          <div className="d-flex align-items-center gap-2 mb-3">
            <Badge bg="info" className="text-dark px-3 py-2 rounded-pill">
              {projet.type === "video" ? "🎥 Vidéo Démo" : "🌐 Projet Web"}
            </Badge>
          </div>

          <h1 className="display-4 fw-bold mb-4" style={{ color: '#2d3436' }}>{projet.titre}</h1>
          
          <hr className="my-4" style={{ width: '50px', height: '4px', backgroundColor: '#007bff', opacity: '1' }} />

          <h3 className="fw-bold mb-3 mt-5">À propos du projet</h3>
          <p className="fs-5 text-secondary lh-lg" style={{ textAlign: 'justify' }}>
            {projet.description}
          </p>

         {/* On n'affiche le bloc que si le lien est utile */}
{projet.lien && projet.lien !== "#" && (
  <div className="mt-5 p-4 bg-light rounded-4 border">
    <h5 className="fw-bold mb-4">Prêt à en savoir plus ?</h5>
    <Button 
      variant="primary" 
      size="lg" 
      href={projet.source || projet.lien} 
      target="_blank" 
      className="px-5 py-3 rounded-pill fw-bold shadow-sm"
    >
      {projet.id === "justisconnecte" ? "Accéder au site Justisconnecte" : "Voir le projet en ligne"}
    </Button>
  </div>
)}
        </div>
      </div>
    </Container>
  );
};

export default DetailsProjet;