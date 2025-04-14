import React from 'react';
import { useNavigate } from 'react-router-dom'


const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
    const navigate = useNavigate();

    return (

        <nav className={`menu-container ${navbarOpen ? "expanded" : ""}`}>
            <ul className='menu-list'>
                <li className='nav-li'>

                    {/* Navegação para a página "Home*/}
                    <a href="/home" className='nav-link' onClick={() => setNavbarOpen(false)}>HOME</a>
                    
                    {/* Navegação para a página "Portifolio*/}
                    <a href="/portfolio-page" className='nav-link portfolio-link' onClick={() => navigate('/portfolio-page')}>PORTFOLIO</a>

                    {/* Navegação para a página "Journal"*/}
                    <a href="/about" className='nav-link' onClick={() => navigate('/about')}>ABOUT</a>

                    {/* Navegação para a página "ContactPage"*/}
                    <a href="/contact-page" className='nav-link' onClick={() => navigate('/contact-page')}>CONTACT</a>

                    {/* Navegação para a página "Subscribe"*/}
                    <a href="/subscribe-page" className='nav-link' onClick={() => navigate('/subscribe-page')}>SUBSCRIBE</a>                    

                </li>
            </ul>
        </nav>
    );
}

export default MenuOverlay;
