import React from 'react'
import Header from '../Header'
import Footer from '../parts/Footer'

function Layout(props) {
  return (
      <>
        <Header/>
            <h1>{props.title}</h1>
                {props.children}
        <Footer/>
      </>
  )
}

export default Layout