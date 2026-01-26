import React  from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter'; // Pour Animation de texte qui s'ecrit tout seul
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DetailsProjet from './ProjetsDetails';
import { mesProjets } from "./projetsData";
import { mesCertifications } from "./certificationsData";
import CertifCard from "./CertifCard";
import Contact from "./Contact";


const ProjetCard = ({imageSrc, titre, description, lien, id}) => {
  
  const [isZoomed, setIsZoomed] = React.useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
    
  }

  return (

    <Col md={6} lg={4}>

<Card className="h-100 border-0 shadow project-card hover-lift">
  <div 
    className="project-image-container overflow-hidden position-relative" 
    onClick={toggleZoom}
    style={{ cursor: 'zoom-in' }}
  >
    <Card.Img 
      variant="top" 
      src={imageSrc} 
      alt={titre} 
      className="project-img img-cover transition-scale"
    />
    <div className="image-overlay" />
  </div>
  
  <Card.Body className="d-flex flex-column text-center px-4 py-4">
    <Card.Title className="fw-bold mb-3 text-dark fs-5">
      {titre}
    </Card.Title>
    
    <Card.Text className="text-muted small flex-grow-1 lh-base mb-4">
      {description}
    </Card.Text>
    
    <Button 
      variant="primary" 
      className="mt-auto btn-detail rounded-pill px-4 py-2 fw-medium shadow-sm"
      href={lien}
      target="_blank"
      rel="noopener noreferrer"
    >
<Link to={`/projet/${id}`} className="btn btn-primary rounded-pill">
         Voir le projet
                 <i className="bi bi-arrow-up-right small" />
    </Link>

    </Button>
  </Card.Body>
</Card>

{/* Overlay de zoom */}
      {isZoomed && (
        <div className="zoom-overlay" onClick={toggleZoom}>
          <span className="close-button">&times;</span>
          <img src={imageSrc} className="zoomed-image" alt="Zoom" />
        </div>
      )}

    </Col>
  )

}


function App() {


return (
  <Router>
      <Routes>
        <Route path="/" element={
  <div className="App">
    {/* 1. La video de fond */}
    <div className="hero-section">

      <video autoPlay loop muted playsInline className="video-background">
        {/* le fichier de la video */}
        <source src="/background/background.mp4" type="video/mp4" />

      </video>
      <div className="video-overlay"></div>

      {/* La barre de navigation */}

      <Navbar expand="lg" variant="dark" className="custom-navbar fixed-top bg-black">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand-custom">
              PORTFOLIO
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#profil" className="nav-link-custom">PROFIL</Nav.Link>
                <Nav.Link href="#competences" className="nav-link-custom">COMPÉTENCES</Nav.Link>
                <Nav.Link href="#projets" className="nav-link-custom">PROJETS</Nav.Link>
                <Nav.Link href="#certifications" className="nav-link-custom">CERTIFICATIONS</Nav.Link>
                <Nav.Link href="#contact" className="nav-link-custom">CONTACT</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      {/* Le texte central, Nom + Animation */}

      <div className="hero-content text-center">
          <h1 className="main-title">EL ABASS ABDOUL ANZIZ KONE</h1>
<div className="typewriter-text">
  <Typewriter
    words={[
      "Étudiant en Réseaux et Sécurité Informatique",
      "Autodidacte en développement web",
      "Passionné par la Protection de la Vie Privée et de la Sécurité des Données",
    ]}
    loop={0}
    cursor
    cursorStyle="|" // Curseur plus visible
    typeSpeed={80} // Écriture moyenne
    deleteSpeed={40} // Suppression légèrement plus rapide que l'écriture
    delaySpeed={2000} // Pause raisonnable
  />
</div>
        </div>
        
    </div>


{/* La section PROFIL */}

<section id="profil" className="section-background-gray pb-5">
  <Container className="py-2">

{/* La section 'profil' sur fond gris */}
<div className="profile-card bg-white shadow-lg"> 

<Row className="align-items-center py-5">
  {/* Colonne gauche : photo et CV */}
    <Col md={5} className="text-center mb-5 mb-md-0">
    <div className="profile-img-container position-relative mb-4">
      <div className="ma-photo">
        <img 
          src="/ma_photo.png"
          alt="Mon portrait"
          className="img-fluid rounded-circle profile-image shadow-lg"
        />
        {/* Effet autour de la photo */}
        <div className="profile"></div>
      </div>

    </div>
    
    {/* Bouton télécharger CV avec dégradé */}
    <a 
      href="/CV_EL_ABASS_ABDOUL_ANZIZ_KONE.pdf"
      download 
      className="btn cv-download-btn btn-lg rounded-pill px-5 py-3 shadow-lg animate__animated animate__pulse animate__infinite"
      style={{animationDuration: '2s'}}
    >
      <i className="bi bi-cloud-arrow-down-fill me-2"></i> Télécharger mon CV
    </a>
  </Col>

{/* Colonne droite : description */}
<Col md={5} >

    {/* Le Titre */}
    <div className="mb-4">
      <h2 className="display-5 fw-bold titre-du-profil mb-2">Mon Profil</h2>
      <div className="title-underline"></div>
    </div>

        {/* Texte descriptif */}
    <div className="profile-text mb-5">
      <p className="lead text-dark-emphasis mb-3">
        Étudiant en <span className="fw-bold">Réseaux et Sécurité Informatique</span>, 
        spécialisé dans la surveillance et l'analyse de menaces (SOC). 
        <span className="fw-bold"> Autodidacte en développement web </span>, avec des bases en programmation et une approche orientée 
        apprentissage des outils de sécurité.
      </p>
      <p className="lead text-dark-emphasis">
       Curieux et rigoureux, je souhaite consolider mes compétences
       en analyse de sécurité, détection d’incidents et gestion des vulnérabilités à
       travers des projets pratiques et <span className="fw-bold"> une expérience en environnement SOC.</span>
      </p>
    </div>

        {/* Infos */}
    <Row className="g-4">
      <Col lg={6}>
        <div className="info-card h-100">
          <div className="info-icon">
            <i className="bi bi-geo-alt-fill text-primary"></i>
          </div>
          <div className="info-content text-center">
            <h5 className="fw-bold mb-1">Localisation</h5>
            <p className="mb-0 text-secondary">Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </Col>
      <Col lg={6}>
        <div className="info-card h-100">
          <div className="info-icon">
            <i className="bi bi-briefcase-fill text-primary"></i>
          </div>
          <div className="info-content text-center">
            <h5 className="fw-bold mb-1">Disponibilité</h5>
            <p className="mb-0 text-secondary">Stage</p>
            <span className="badge availability-badge bg-success">Immédiate</span>
          </div>
        </div>
      </Col>
    </Row>

</Col>

</Row>
</div>
  </Container> 

</section>


{/* La section "compétences" */}
<section id="competences"  className="section-background-gray pb-5">

  <Container className="py-2">
{/* La section 'compétences' sur fond gris */}
<div className="profile-card bg-white shadow-lg"> 
  

    <h2 className="text-center mb-5 display-6 fw-bold">MES COMPÉTENCES</h2>
    <div className="title-underline-competences"></div>

    <Row className="justify-content-center g-4">

      {/* Carte 1 : Cybersécurité */}
      <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          <div className="icon-wrapper mb-4">
      {/* L'icône du cadenas */}
      <i className="bi bi-lock-fill"></i>
    </div>

         {/*  <div className="icon-wrapper mb-4">
            <i className="bi bi-code-slash"></i>
          </div> */}

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">CYBERSÉCURITÉ</Card.Title>
            <Card.Text className="text-secondary">
          Connaissances de base en sécurité informatique y compris les concepts et les bonnes pratiques. 
          Sensibilisation aux menaces courantes telles que les attaques par phishing, les malwares et les violations de données.
          Initiation au <span className="fw-bold"> framework MITRE ATT&CK </span> pour l’identification et le mappage des tactiques et techniques d’attaque.
          Analyse du réseau et des alertes de sécurité avec <span className="fw-bold"> Wireshark, Tcpdump, Suricata (IDS) et Splunk (SIEM) </span>, ainsi que le <span className="fw-bold">  scan de vulnérabilités </span> avec Nessus.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

{/* La carte de "Développement web" */}
 <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          {/* Icone pour la carte "développement web" */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-code-slash"></i>
          </div>

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">DÉVELOPPEMENT WEB</Card.Title>
            <Card.Text className="text-secondary">

              Bases solides en développement web avec <span className="fw-bold">  HTML, CSS, JavaScript, React et Bootstrap </span> pour la création d’interfaces modernes et responsives.
Utilisation de <span className="fw-bold">  PHP et MySQL</span> pour le développement côté serveur.
Réalisation du site web  <span className="fw-bold"> JustisConnecte </span>, un projet personnel visant à mettre en relation des clients et des avocats.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


{/* La carte de "Programmation informatique" */}
 <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          {/* Icone de la carte "Programmation" */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-braces-asterisk"></i>
          </div>

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">PROGRAMMATION INFORMATIQUE</Card.Title>
            <Card.Text className="text-secondary">
Bases en programmation informatique, principalement en <span className="fw-bold">  Python </span>, appliquées à l’automatisation de tâches de sécurité.
Développement d’un script de monitoring capable d’identifier une adresse IP suspecte et de déclencher un script <span className="fw-bold"> Bash </span> pour le blocage automatique via pare-feu.
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>

{/* la carte de "SYSTEME" */}
 <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          {/* Icone de la carte "SYSTÈME" */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-pc-display"></i>
          </div>

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">SYSTÈME</Card.Title>
            <Card.Text className="text-secondary">

              Bases en administration de systèmes Windows et Linux (Ubuntu), gestion des utilisateurs et des droits d’accès. Initiation à l'administration via  <span className="fw-bold"> Active Directory </span>(création de comptes, stratégies de mots de passe, gestion du cycle de vie des accès). Audits de vulnérabilités via <span className="fw-bold"> Nessus </span> et remédiation de failles critiques.
              </Card.Text>
          </Card.Body>
        </Card>
      </Col>

{/* la carte de "SYSTEME" */}
 <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          {/* Icone de la carte "RÉSEAUX" */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-diagram-3-fill"></i>
          </div>

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">RÉSEAUX</Card.Title>
            <Card.Text className="text-secondary">
Conception d’un Réseau d’Entreprise <span className="fw-bold">(Packet Tracer). </span>
Mise en place d’une infrastructure réseau complète intégrant les
services DNS, DHCP, SMTP, FTP et SSH.
Configuration du <span className="fw-bold">subnetting</span>, des listes de contrôle d’accès <span className="fw-bold">ACL</span>, des <span className="fw-bold">VLANs</span> et
du protocole <span className="fw-bold">OSPF</span> pour le routage dynamique.
Sécurisation des équipements (routeurs, switches) via <span className="fw-bold">SSH</span> et mots de
passe chiffrés.
Test de la connectivité et vérification de la résilience du réseau à
travers des simulations réelles.

   </Card.Text>
          </Card.Body>
        </Card>
      </Col>

{/* Compétences relationnelles */}
 <Col md={5} lg={4}>
        <Card className="h-100 border-0 shadow custom-card text-center p-4">

          {/* Icone de la carte "COMPÉTENCES RELATIONNELLES" */}
          <div className="icon-wrapper mb-4">
            <i className="bi bi-people-fill"></i>
          </div>

          <Card.Body>
            <Card.Title className="fw-bold mb-3 uppercase">SOFT SKILLS</Card.Title>
            <Card.Text className="text-secondary">
Capacité à travailler en équipe, écouter et prendre en compte les idées des autres, collaborer efficacement pour atteindre des objectifs 
communs et contribuer à un environnement de travail positif.

   </Card.Text>
          </Card.Body>
        </Card>
      </Col>

    </Row>
    </div>
  </Container>

</section>



<section id="projets"  className="section-background-gray pb-2">
  <Container className="pb-5">

<div className="profile-card bg-white shadow-lg"> 

    <h2 className="text-center mb-0 display-6 fw-bold">MES PROJETS</h2>
    <div className="title-underline-projets"></div>

<Row className="g-4 mt-4">
  {mesProjets.map((projet) => (
    <ProjetCard 
      key={projet.id}
      id={projet.id} 
      imageSrc={projet.imageSrc}
      titre={projet.titre}
      lien={projet.lien}
    />
  ))}
</Row>


</div>
  </Container>
</section>

<section id="certifications" className="section-background-gray pb-5">
  <Container className="pb-5">
    <div className="profile-card bg-white shadow-lg"> 

    <h2 className="text-center mb-0 display-6 fw-bold">MES CERTIFICATIONS</h2>
    <div className="title-underline-projets mb-5"></div>

    <Row className="g-4 mt-4">
      {mesCertifications.map((certif) => (
        <CertifCard 
          key={certif.id}
          titre={certif.titre}
          organisme={certif.organisme}
          date={certif.date}
          badgeIcon={certif.badgeIcon}
          lien={certif.lien}
        />
      ))}
    </Row>
    </div>
  </Container>

</section>

  {/* La section Contact */}
<section id="contact" className="section-background-gray pb-5">
  <Container>  
<div className="profile-card">
<Contact />

</div>
</Container>
</section>

  </div>

        } />
        <Route path="/projet/:id" element={<DetailsProjet />} />
        </Routes>
    </Router>

)


}

export default App;