import React from 'react'
import "../styles/header.css"
import {  NavLink } from 'react-router-dom'
import Logo from './parts/Logo'

function Header() {



  return (
   <>
   <nav
      className='navigation'>
      <Logo/>
          <ul className='pages'>
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
                <NavLink 
                  className='links'
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