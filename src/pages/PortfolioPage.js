import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import MenuOverlay from '../components/MenuOverlay';
import Banner from '../components/Banner';
import FooterMenu from '../components/FooterMenu';
import Item from '../components/Item';
import products from '../albunsCollection.json';


const PortfolioPage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [productList, setProductList] = useState([]);

          
  useEffect(() => {
    setProductList(products.albuns)
    }, [])


  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <section className="main-products">
        {productList.map((p, index) => (
          <Item key={index} product={p} />
        ))}
        </section>

      <Banner />
      <FooterMenu />
    </div>
  );
};

export default PortfolioPage;
