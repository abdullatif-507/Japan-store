import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
            <div className="logo">
              <div>
                <h1>Japan Store</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
              Japane store one of the best E-store to buy best japanes products
              with high quality and best prices.
              there is alot of types product such as Clothes, Lights ,Manga  ,Accessesoris and More
            </p>
          </Col>

          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">The Categories</h4>
              <ListGroup classNamemb='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Hoddis</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>T-shrits</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Lights</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Manga</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>School Kit</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Accessesoris</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup classNamemb='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/Login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3' md='4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup classNamemb='mb-3 footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>Syria, Aleppo</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+963 968 259 919</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>example231@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} | developed by 3BDO.DEV .All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer