import React, {useRef, useEffect} from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';

import {motion} from 'framer-motion';

import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap'
import { useSelector } from 'react-redux';
import useAuth from '../../custom-hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';
import { toast } from 'react-toastify';

import DarkMode from '../DarkMode/DarkMode';

import './header.css';

const nav__Links =[
  {
    path:'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }
]

const Header = () => {

  const headerRef = useRef(null);
  const totlaQuantity = useSelector(state=> state.cart.totlaQuantity);  

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {currentUser} = useAuth();

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      } else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  const logout = ()=>{
    signOut(auth).then(()=>{
      toast.success('Logged out')
      navigate('/home')
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  useEffect(() =>{
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const menuToggle = () => menuRef.current.classList.toggle('active__menu')

  const navigateToCart = ()=>{
    navigate('/cart')
  }

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <div>
                <h2>Japan Store</h2>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  nav__Links.map((item, index) => (
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="nav__icons">
  
              <DarkMode/>

              <span className='cart__icon' onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totlaQuantity}</span>
              </span>

              <div className='profile'>
              <UncontrolledDropdown>
                <DropdownToggle color="white" className="border-0 p-0 me-2">
                <motion.img whileTap={{ scale: 1.1 }} src={currentUser ? currentUser.photoURL : userIcon} alt="user" />
                </DropdownToggle>
                <DropdownMenu end>
                <DropdownItem header>Your Acount</DropdownItem>
                <DropdownItem>
                  {
                    currentUser ?(
                      <Link className="d-block" to={"/checkout"}>
                      Checkout
                      </Link>
                    ):(
                      <Link className="d-block" to={"/signup"}>
                      Register
                      </Link>
                    )
                  }
                </DropdownItem>
                  <DropdownItem>
                    {
                      currentUser ?(
                        <span className="d-block" onClick={logout}>
                        Logout
                        </span>
                      ):(
                        <Link className="d-block" to={"/login"}>
                        Login
                        </Link>
                      )
                    }{" "}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>

            
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header