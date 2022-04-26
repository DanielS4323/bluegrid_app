import React from 'react'
import Header from '../Header'
import Footer from '../parts/Footer'

function Layout(props) {
  return (
      <>
        <Header/>
            {props.children}
        <Footer/>
      </>
  )
}

export default Layout