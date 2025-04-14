import React from 'react';
import SubscribeForm from '../components/SubscribeForm';
import { Header } from '../components/Header';
import { useState } from "react";
import MenuOverlay from '../components/MenuOverlay';
import FooterMenu from '../components/FooterMenu';
import { Container } from "react-bootstrap";


const SubscribePage = () => {
  const [navbarOpen, setNavbarOpen] =useState(false);

  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen = {setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Container className='contact-form-container'>
      <SubscribeForm />
      </Container>

      <FooterMenu />
    </div>
  );
}

export default SubscribePage;
