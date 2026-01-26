import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Extraction des variables sécurisées
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        // 2. Popup de succès
        Swal.fire({
          title: 'Succès !',
          text: 'Votre message a bien été envoyé. Je vous répondrai dès que possible.',
          icon: 'success',
          confirmButtonColor: '#0d6efd', // Bleu Bootstrap
          confirmButtonText: 'Parfait'
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // 3. Popup d'erreur
        Swal.fire({
          title: 'Oups...',
          text: 'Une erreur est survenue lors de l\'envoi du message.',
          icon: 'error',
          confirmButtonColor: '#dc3545'
        });
      });
  };


  return (
    <section id="contact">
      <Container>
        <Row className="g-5">
          {/* GAUCHE : FORMULAIRE */}
          <Col>
            <h2 className="fw-bold mb-3">Contactez-moi</h2>
            <p className="text-muted mb-4">Renseignez les informations ci-dessous pour me contacter</p>
            
            <Form ref={form} onSubmit={sendEmail} className="bg-white p-4 rounded-4 shadow-sm">
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold">PRÉNOM</Form.Label>
                  <Form.Control name="user_firstname" type="text" placeholder="Votre prénom" required />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Label className="fw-bold">NOM</Form.Label>
                  <Form.Control name="user_name" type="text" placeholder="Votre nom" required />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">EMAIL</Form.Label>
                <Form.Control name="user_email" type="email" placeholder="abc@xyz.com" required />
                <Form.Text className="text-muted">Veuillez renseigner votre adresse email pour que je puisse vous répondre.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">TÉLÉPHONE</Form.Label>
                <Form.Control name="user_phone" type="tel" placeholder="+225 ..." />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-bold">MESSAGE</Form.Label>
                <Form.Control name="message" as="textarea" rows={4} placeholder="Comment puis-je vous aider ?" required />
              </Form.Group>

              <p className="text-muted small">
  En cliquant sur envoyer, vous acceptez que vos informations soient utilisées pour vous recontacter.
</p>

              <Button variant="primary" type="submit" className="w-100 py-3 fw-bold rounded-pill shadow">
                ENVOYEZ
              </Button>
            </Form>
          </Col>

          {/* DROITE : COORDONNÉES */}
          <Col lg={5} className="ps-lg-5">
            <h2 className="fw-bold mb-4">Coordonnées</h2>
            <div className="d-flex flex-column gap-4">
              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-3 rounded-circle me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Localisation</h6>
                  <span>Abidjan, Côte d'Ivoire</span>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="bg-primary text-white p-3 rounded-circle me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Téléphone</h6>
                  <span>+225 0151825133</span>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="fw-bold mb-3">Réseaux Sociaux</h6>
                {/* Linkedin */}
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/el-abass-abdoul-anziz-kone-4a173631a/" className="btn btn-outline-dark rounded-circle"><i className="bi bi-linkedin"></i></a>

                  {/* Github */}
                  {/* GitHub */}
    <a 
      href="https://github.com/CodeurIvoirien225"
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn btn-outline-dark rounded-circle shadow-sm"
      title="GitHub"
    >
      <i className="bi bi-github"></i>
    </a>
                   </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;