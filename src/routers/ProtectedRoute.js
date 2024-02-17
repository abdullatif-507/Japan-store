import React from 'react';
import useAuth from '../custom-hooks/useAuth';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({chidren}) => {

  const {currentUser} = useAuth()

  return currentUser ? chidren : <Navigate to='/login'/>
}

export default ProtectedRoute;