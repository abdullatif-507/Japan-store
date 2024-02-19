import React,{ useState } from 'react';
import Helmet from '../components/Helment/Helment';
import { Container, Col, Row, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';
import { toast } from 'react-toastify';

import '../styles/login.css';

import { dotSpinner } from 'ldrs';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const signIn = async (e)=>{

    e.preventDefault()
    setLoading(true)

    try{

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
      setLoading(false)
      toast.success('Successfully login')
      navigate('/checkout')

    } catch (error){
      setLoading(false)
      toast.error(error.message)
    }
  }

  dotSpinner.register()
  
  return (
    <Helmet title='Login'>
      <section>
        <Container>
          <Row>
            {
              loading ?(
                <Col className='text-center' lg='12'>
                  <l-dot-spinner
                    size="40"
                    speed="0.9" 
                    color="orange" 
                  ></l-dot-spinner>
                </Col>
              ) : (
                <Col lg='6' className='m-auto text-center'>
                  <h3 className='fw-bold mb-4 main-title'>Login</h3>
                  <Form className='auth__form' onSubmit={signIn}>
                    <FormGroup className='form__group'>
                      <input type="email" 
                      placeholder='Enter your email...'
                      value={email} onChange={e=> setEmail(e.target.value)}/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                      <input type="password" 
                      placeholder='Enter your password...' 
                      value={password} onChange={e=> setPassword(e.target.value)}/>
                    </FormGroup>
    
                    <button type='submit' className="buy__btn auth_btn">Login</button>
                    <p>Don't have an account? <Link to='/signup'>Create an account</Link></p>
                  </Form>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login