import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoImage from '../assets/images/logo.jpg';

const FooterMenu = ({ navbarOpen, setNavbarOpen }) => {
    const navigate = useNavigate();

    return (
        <Container className="footer">
            <Row className="d-flex justify-content-between align-items-start">
                <Col xs={12} md={8} className="footer-logo">
                    <div className="logo">
                        <img src={logoImage} alt="LogoImg" className="logo-image" />
                    </div>
                </Col>
                <Col xs={12} md={3} className="footer-menu">
                    <b>MENU</b>
                    <ul className="footer-menu-list">
                        <li><a href="/home" className="nav-link" onClick={() => navigate('/home')}>HOME</a></li>
                        <li><a href="/portfolio-page" className="nav-link" onClick={() => navigate('/portfolio-page')}>PORTFOLIO</a></li>
                        <li><a href="/about" className="nav-link" onClick={() => navigate('/about')}>ABOUT</a></li>
                        <li><a href="/contact-page" className="nav-link" onClick={() => navigate('/contact-page')}>CONTACT</a></li>
                    </ul>
                </Col>
                <Col xs={12} md={3} className="footer-info">
                    <b>INFO</b>
                    <ul className="footer-info-list">
                        <li><a href="/home" className="nav-link" onClick={() => navigate('/home')}>PIXIESET</a></li>
                        <li><a href="/home" className="nav-link" onClick={() => navigate('/home')}>INSTAGRAM</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default FooterMenu;
