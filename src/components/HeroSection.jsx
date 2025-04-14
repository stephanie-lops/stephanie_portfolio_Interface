import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
//import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    //const navigate = useNavigate();

    return (
        <Container className='hero-section-container'>
            <Row className='h-100'>
            <Col xs={12} md={8} className='d-flex flex-column justify-content-start text-start px-0'>
                <div className='text-container'>
                    <h1 className='title'>Stephanie</h1>
                    <h1 className='title'>Lopes</h1>
                    <h2 className='sub-title'>FILM PHOTOGRAPHER</h2>
                    <div className='img-hello'></div>
                </div>
                
            </Col>

                <Col xs={12} md={4}>
                    <div className='img-wrapper'></div>
                </Col>
            </Row>
        </Container> 

        

    )
}

export default HeroSection;
