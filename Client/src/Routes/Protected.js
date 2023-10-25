import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LoginContext from '../Contexts/LoginContext';
import Verification from '../Verification';


const Protected = ( props ) => {
    
    const { Component } = props;
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        if(!true) {
            return <Verification />;
        }
    })

  return (
    <div>
        <Component  />
    </div>
  )
}

export default Protected