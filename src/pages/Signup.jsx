import React,{ useState } from 'react';
import Helmet from '../components/Helment/Helment';
import { Container, Col, Row, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import {auth} from '../firebase.config'

import { storage } from '../firebase.config';
import { db } from '../firebase.config';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { dotSpinner } from 'ldrs';

const Signup = () => {
  const [username,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const signup = async(e)=>{
    e.preventDefault()
    setLoading(true)

    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );

      const user = userCredential.user
      const storageRef = ref(storage, `images/${ Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on((error)=>{
        toast.error(error.message);
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
            //update user profile
          await updateProfile(user,{
            displayName: username,
            photoURL: downloadURL
          });
          // store user data in firestore database
          await setDoc(doc(db,"users", user.uid),{
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          });
        })
      })

      setLoading(false)
      toast.success('Account created successfully')
      navigate('/login')
    } catch (error){
      setLoading(false)
      toast.error('something went wrong');
    }
  }

  dotSpinner.register()

  return (
    <Helmet title='Signup'>
      <section>
        <Container>
          <Row>
            {
              loading ? ( 
                <Col lg='12' className='text-center'>
                  <l-dot-spinner
                    size="40"
                    speed="0.9" 
                    color="orange" 
                  ></l-dot-spinner>
                </Col>
              ):(
                <Col lg='6' className='m-auto text-center'>
                  <h3 className='fw-bold mb-4 main-title'>Signup</h3>
                  <Form className='auth__form' onSubmit={signup}>
                    <FormGroup className='form__group'>
                      <input type="text" 
                      placeholder='Username...'
                      value={username} onChange={e=> setUsername(e.target.value)}/>
                    </FormGroup>

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

                    <FormGroup className='form__group'>
                      <input type="file" 
                      onChange={e=> setFile(e.target.files[0])}/>
                    </FormGroup>

                    <button type='submit' className="buy__btn auth_btn">Create an Account</button>
                    <p>have an account? <Link to='/login'>Login</Link></p>
                  </Form>
                </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Signup