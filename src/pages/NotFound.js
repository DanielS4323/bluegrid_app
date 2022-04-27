import React from 'react'
import Layout from '../components/layout/Layout'
import oops from '../assets/images/oops.png'
import fourOfour from '../assets/images/404.png'
import '../styles/not-found.css'
import { TitleName } from '../services/Hooks'

function NotFound() {

  TitleName('404 Page not found')


  return (
  
   <Layout>
      <div className='wrap'>
        <img alt='error' className='img-four' src={fourOfour}/>
        <img alt='character' className='img-char' src={oops}/>
      </div>
      
   </Layout>
  )
}

export default NotFound