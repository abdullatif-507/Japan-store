import React,{ useState, useRef, useEffect } from 'react';

import { Container, Row, Col  } from 'reactstrap';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helment from '../components/Helment/Helment';
import CommonSection from '../components/UI/CommonSection';
import { motion } from 'framer-motion';
import '../styles/product_details.css';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {

  const [tab,setTab] = useState('desc')
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [rating, setRating] = useState(null)
  const {id} = useParams();
  const product = products.find((item) => item.id === id);
  const{
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter(item=> item.category=== category)
  
  const submitHandler = (e)=>{
    e.preventDefault()
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewObj)
    toast.success('Your reviwe submited')
  }

  const addToCart = () =>  {
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
      productName,
      price,

    }))
    toast.success('product added successfully')
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])



  return (
    <Helment title={productName}>
      <CommonSection title={productName} />

      <section>
        <Container className='mt-3 mb-1'>
          <Row>
            <Col lg='6'>
              <img className='product__img p-5' src={imgUrl} alt="" />
            </Col>

            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-3 rating__group'>
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>(<span>{avgRating}</span>ratings)</p>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <span className='product__price'>${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>

                <p className='mt-3'>{shortDesc}</p>
                <p className='mt-2 mb-4'>{description}</p>
                
                <div>
                  {
                    product.isClothes === true ?(
                    <>
                      <select className='size__selecter'>
                        <option>Select the size</option>
                        <option value="xxxl">XXXL</option>
                        <option value="xxl">XXL</option>
                        <option value="xl">XL</option>
                        <option value="l">L</option>
                        <option value="m">M</option>
                        <option value="s">S</option>
                      </select>

                      <motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToCart}>Add to cart</motion.button>
                    </>
                    ):( 
                      <motion.button whileTap={{scale: 1.2}} className="buy__btn" onClick={addToCart}>Add to cart</motion.button>
                    )
                  }
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab=== 'desc' ? 'active__tab' : ''}`}
                onClick={()=> setTab('desc')}>description</h6>
                <h6 className={`${tab=== 'rev' ? 'active__tab' : ''}`}
                onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>

              {
                tab === 'desc' ? <div className="tab__content mt-5">
                <p>{description}</p>
                </div> : <div className='product__review mt-5'>
                  <div className="review__wrapper">
                    <ul>
                      {
                        reviews?.map((item, index)=> (
                          <li key={index} className='mb-4'>
                            <h6>3bdo</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder='Enter name...' ref={reviewUser} required/>
                        </div>

                        <div className="form__group d-flex align-items-center gap-5">
                          <motion.span whileTap={{scale: 1.2}} onClick={()=> setRating(1)}>
                            1<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale: 1.4}} onClick={()=> setRating(2)}>
                            2<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale: 1.4}} onClick={()=> setRating(3)}>
                            3<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale: 1.4}} onClick={()=> setRating(4)}>
                            4<i className="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span whileTap={{scale: 1.4}} onClick={()=> setRating(5)}>
                            5<i className="ri-star-s-fill"></i>
                          </motion.span>
                        </div>

                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder='Review Message...' ref={reviewMsg} required/>
                        </div>

                        <motion.button whileTap={{scale: 1.2}} type='submit' className="buy__btn">Submit</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              }

            </Col>

            <Col lg='12' className='mt-5 mb-5'>
              <h2 className="related__title">
                You might also like
              </h2>
            </Col>

            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>

    </Helment>
  )
}

export default ProductDetails