import React from 'react';
import './Services.css';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';

import serviceData from '../assets/data/serviceData';

const Services = () => {
  return <section className="services">
    <Container>
      <Row>
        <Col lg='12' md='12'>
          <h1 className='text-center'>Work with</h1>
        </Col>
        {
        serviceData.map((item,index) => (
          <Col lg='3' md='4' key={index}>
            <motion.div whileHover={{scale: 1.1}} className="service__item">
              <img src={item.img} alt="" />
            </motion.div>
          </Col>
          
        ))
        }
      </Row>
    </Container>
  </section>
}

export default Services