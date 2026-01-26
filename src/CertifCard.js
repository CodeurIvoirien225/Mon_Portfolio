import React from 'react';
import { Col, Card, Badge, Button } from 'react-bootstrap';

const CertifCard = ({ titre, organisme, date, badgeIcon, lien }) => {
  return (
    <Col md={6} lg={4}>
      <Card className="h-100 border-0 shadow text-center p-3 certif-card">
        <Card.Body className="d-flex flex-column">
  <div className="mb-3">
    <i className={`bi ${badgeIcon} fs-1 text-primary`}></i>
  </div>
  
  <Card.Title className="fw-bold">{titre}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{organisme}</Card.Subtitle>
  
  {/* On ajoute une marge en bas (mb-4) pour décoller le bouton */}
  <div className="mt-3 mb-4">
    <Badge bg="light" text="dark" className="border py-2 px-3">
      Obtenu en {date}
    </Badge>
  </div>

  {/* 'mt-auto' permet de coller le bouton en bas de la carte si le texte est court */}
  <Button 
    variant="outline-primary" 
    size="sm" 
    href={lien} 
    target="_blank" 
    rel="noopener noreferrer"
    className="mt-auto rounded-pill px-4 py-2 shadow-sm fw-medium"
  >
    <i className="bi bi-eye me-2"></i>
    Voir le certificat
  </Button>
</Card.Body>

      </Card>
    </Col>
  );
};

export default CertifCard;