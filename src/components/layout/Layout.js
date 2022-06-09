import React from 'react'
import Header from '../UI/Header'
import Footer from '../UI/Footer'

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