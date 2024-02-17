import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

import Helmet from '../components/Helment/Helment';
import '../styles/Home.css'

import Clock from '../components/UI/Clock';

import Products from '../assets/data/products';

import { Container, Row, Col } from 'reactstrap';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';

import counterImg from '../assets/images/timerImg.png';

const Home = () => {

  const [trandingProducts, setTrandingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([])
  const [populareProducts, setPopulareProducts] = useState([])

  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = Products.filter(
      (item) => item.home === true
    );

      const filteredBestSalesProducts = Products.filter(
        (item) => item.best === true
      );
    
      const filteredNewProducts = Products.filter(
        (item) => item.new === true
      );

      const filteredPopulareProducts = Products.filter(
        (item) => item.populare === true
      );
    setTrandingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setNewProducts(filteredNewProducts);
    setPopulareProducts(filteredPopulareProducts);
  },[])

  return <Helmet title={"Home"}>
    <section className='hero__section'>
      <Container>
        <Row>
        <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero__subtitle">Japanes product in {year}</p>
              <h2>Make Your Life Style More Like Japane</h2>
              <p>Japane store one of the best E-store to buy best japanes products
                with high quality and best prices.
                there is alot of types product like Clothes, Lights, Manga, Accessesoris and More!</p>

                <motion.button whileTap={{ scale:1.2 }} className='buy__btn mt-4'>
                  <Link to='../shop'>SHOP NOW</Link>
                </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services/>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Trending prodeucts</h2>
          </Col>
          <ProductsList data={trandingProducts} />
        </Row>
      </Container>
    </section>

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>

          <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className="clock__top-content">
              <h4 className='fs-6 mb-2'>limited Offer</h4>
              <h3 className='fs-5 mb-3'>Quality Hoddie</h3>
            </div>

            <Clock/>

            <motion.butoon whileTap={{scale: 1.2}} className="buy__btn store__btn">
              <Link to='/shop'>Visit Store</Link>
            </motion.butoon>
          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          <ProductsList data={newProducts} />
        </Row>
      </Container>
    </section>

    <section className="popular__category">
    <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Populare in Category</h2>
          </Col>
          <ProductsList data={populareProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Home; 