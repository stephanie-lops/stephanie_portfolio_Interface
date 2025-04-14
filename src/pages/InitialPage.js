import '../App.scss';
import HeroSection from '../components/HeroSection';
import { Container  } from "react-bootstrap";
import { Header } from '../components/Header';
import MenuOverlay from '../components/MenuOverlay';
import FooterMenu from '../components/FooterMenu';
import Banner from '../components/Banner';
import { useState, useEffect } from "react"
import products from '../albunsCollection.json';
import Item from "../components/Item"

function InitialPage() {
  const [navbarOpen, setNavbarOpen] =useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products.albuns)
    }, [])

  return (
    <div className="App">
      <Container fluid>
        <Header navbarOpen={navbarOpen} setNavbarOpen = {setNavbarOpen} />
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <HeroSection/>

        <div className='portfolio-title'>
          <span className='main-text'>MAIN</span> <span className='projects-text'>projects</span>
        </div>

        <section className="main-products">
        {productList.map((p, index) => (
          <Item key={index} product={p} />
        ))}
        </section>

        <Banner/>
        <FooterMenu />
      </Container>
    </div>
  );
}

export default InitialPage;
