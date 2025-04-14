import { useLocation } from "react-router";
import { useState } from "react";
import { Header } from '../components/Header';
import MenuOverlay from '../components/MenuOverlay';
import FooterMenu from '../components/FooterMenu';

export default function AlbumDetails() {
    const [navbarOpen, setNavbarOpen] =useState(false);

    let { state } = useLocation();

    return (
        <div className="detailed-content">
            <Header navbarOpen={navbarOpen} setNavbarOpen = {setNavbarOpen} />
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
            <div>

                <div className="main-container">
                    {/* Imagem principal */}
                    <img className="detailed-image" src={process.env.PUBLIC_URL + state.p.image} alt={state.p.title} />
                    <p className="name-product">{state.p.title}</p>
                    
                </div>
                <div>
                    {/* Iterando e renderizando as fotos */}
                    <div className="detailed-container">
                        {state.p.photos && state.p.photos.map((photo, index) => {
                            const imageSrc = process.env.PUBLIC_URL + photo.src;
                            return (
                                <div key={index} className="detailed-column">
                                    <div className="detailed-image-container">
                                        <img className="detailed-image" src={imageSrc} alt={photo.name} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <FooterMenu />
        </div>

    );
}
