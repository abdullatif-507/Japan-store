import React,{ useState } from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helment/Helment';
import { Container, Row, Col } from 'reactstrap';

import '../styles/shop.css';
import Products from '../assets/data/products'; 
import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products';

const Shop = () => {

  const [productsData, setProductsData] = useState(Products)

  const handleFilter = (e) => {
    const filterValue = e.target.value
    const sortvalue = e.target.value

    if(filterValue === "Hoddie"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Hoddie")
      setProductsData(filteredProducts);
    }

    if(filterValue === "T-shirt"){
      const filteredProducts = Products.filter
        ((item) => item.category === "T-shirt")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Lights"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Light_Night")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Phone Covers"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Phone-cover")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Accessesoris"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Accessoris")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Manga"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Manga")
      setProductsData(filteredProducts);
    }

    if(filterValue === "School Kit"){
      const filteredProducts = Products.filter
        ((item) => item.category === "schoolKit")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Filter By Category"){
      const filteredProducts = Products.filter
        ((item) => item)
      setProductsData(filteredProducts);
    }

    if(filterValue === "Figure"){
      const filteredProducts = Products.filter
        ((item) => item.category === "Figure")
      setProductsData(filteredProducts);
    }

    if(filterValue === "Shoes"){
      const filteredProducts = products.filter
        ((item)=> item.category === 'Shoes')
      setProductsData(filteredProducts);
    }

  // ==========================================

    if(filterValue === "sortBy"){
      const filteredProducts = Products.filter
        ((item) => item)
      setProductsData(filteredProducts);
    }

    if(sortvalue === 'new'){
      const filteredProducts = Products.filter
        ((item) => item.new === true)
      setProductsData(filteredProducts);
    }

    if(sortvalue === 'top'){
      const filteredProducts = Products.filter
        ((item) => item.best === true)
      setProductsData(filteredProducts);
    }

    if(sortvalue === 'populare'){
      const filteredProducts = Products.filter
        ((item) => item.populare === true)
      setProductsData(filteredProducts);
    }
  }


  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts = products.filter
    ((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts);
  }


  return (
    <Helmet title='shop'>
      <CommonSection title='Products'/>

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                <option>Filter By Category</option>
                  <option value="Hoddie">Hoddie</option>
                  <option value="T-shirt">T-shirt</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Phone Covers">Phone Covers</option>
                  <option value="Accessesoris">Accessesoris</option>
                  <option value="Lights">Lights</option>
                  <option value="Manga">Manga</option>
                  <option value="School Kit">School Kit</option>
                  <option value='Figure'>Figures</option>
                </select>
              </div>
            </Col>

            <Col lg="3" md="6" className='text-end'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                <option value='sortBy'>Sort By</option>
                  <option value="new">New Products</option>
                  <option value="top">Top sales</option>
                  <option value="populare">Populare products</option>
                </select>
              </div>
            </Col>

            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder='Search...' onChange={handleSearch}/>
                <span><i className="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center product__message'>Products Not Found!</h1>
            ) : (
              <ProductsList data={productsData}/>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop