import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/logo.png"


function Logo() {
    const navigate = useNavigate()
  return (
    <img
          onClick={() => navigate('/')}
          alt='logo'
          className='logo'
          src={logo}
          />
  )
}

export default Logo