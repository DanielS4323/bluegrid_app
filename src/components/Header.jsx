import React from 'react'
import logo from "../assets/images/logo.png"
import "../styles/header.css"
import {  NavLink, useNavigate } from 'react-router-dom'

function Header() {

  const navigation = useNavigate();
  
  const onImgClick = () => {
    navigation('/')
  }

  return (
   <>
   <nav
      className='navigation'>
        <img
          onClick={onImgClick}
          alt='logo'
          className='logo'
          src={logo}
          />
            <ul
          className='pages'
          >
          <li>
          <NavLink
            className='links'
            to='/'
            style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : ''
           })}

           >Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            className='links'
            style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : ''
            })}
            to='/about'>
            About Us
          </NavLink>
        </li>
        <li>
            <NavLink className='links'
            to='/contact'
            style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : ''
            })}>
            Contact
          </NavLink>
        </li>
      </ul>
   </nav>
   </>
  )
}

export default Header