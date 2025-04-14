import React from 'react';
import ContactForm from '../components/ContactForm';
import { Header } from '../components/Header';
import { useState } from "react";
import MenuOverlay from '../components/MenuOverlay';
import FooterMenu from '../components/FooterMenu';
import { Container } from "react-bootstrap";

const ContactPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      
      <Container className='contact-form-container my-5'>
        <ContactForm />
      </Container>

      <FooterMenu />
    </div>
  );
};

export default ContactPage;
