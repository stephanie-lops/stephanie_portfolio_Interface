import React from 'react';
import { Header } from '../components/Header';
import MenuOverlay from '../components/MenuOverlay';
import { useState } from "react";
import FooterMenu from '../components/FooterMenu';
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const [navbarOpen, setNavbarOpen] =useState(false);

  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen = {setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <Container className='hero-section-container'>
            <Row className='h-100'>
            <Col xs={12} md={6} className='d-flex flex-column justify-content-start text-start px-0'>
                <div className='text-container'>
                    <div className='img-about'></div>
                </div>
            </Col>
            <Col xs={12} md={6} className='d-flex flex-column justify-content-start text-start px-0'>
                <div className='text-container-about'>
                    <h2 className='sub-title'>ABOUT</h2>
                    <h1 className='title'>Stephanie</h1>
                    <h1 className='title'>Lopes</h1>
                </div>
            </Col>
            </Row>
      </Container> 

      <Container className='about-container'>
      <div class="about-text">
      <p> Com o hábito de registrar por meio de fotografia o dia-a-dia e momentos entre amigos desde criança utilizando cybershots, desenvolvi ao longo dos últimos 2 anos um extenso portfólio em fotografias analógicas. </p>
      <p> Esse trabalho se intensificou com o período de oito meses residindo no Japão, país em que a fotografia é principal recurso criativo e explorada por muitos profissionais, incentivados tanto pela facilidade de aquisição de equipamentos e serviços quanto pelas paisagens fotogênicas do país. </p>
      <p> Nesse portfólio, são mostrados álbuns com fotografias produzidas nas cidades japonesas Iwata, Nagoya, Tokyo e na vila Shirakawa Go durante o inverno e nas cidades brasileira Manaus, Rio de Janeiro e São Paulo. </p>
      <p> Os registros são do dia a dia em Manaus, atual residência, e viagens para outras cidades. Além de trabalhos em eventos culturais voltados para a produção musical. </p>
      </div>
      </Container>
      <Container className='about-container'>
      <div class="about-text">
      <p> Having used cybershots to record my daily life and moments with friends through photography since I  was a child, I have developed an extensive portfolio of analog photographs over the last two years. </p>
      <p> This work intensified during an eight-month period living in Japan, a country where photography is the main creative resource and is explored by many professionals, encouraged both by the ease of acquiring equipment and services and by the country's photogenic landscapes. </p>
      <p> This portfolio includes albums with photographs produced in the Japanese cities of Iwata, Nagoya, Tokyo and the village of Shirakawa Go during the winter and in the Brazilian cities of Manaus, Rio de Janeiro and São Paulo. </p>
      <p> The photographs are of my daily life in Manaus, my current residence, and my trips to other cities. In addition to work at cultural events focused on music production. </p>
      </div>
      </Container>
      <FooterMenu />
    </div>
  );
}

export default About;
