import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState } from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';



function BlueGridApp() {

const [articles, SetArticles] = useState([{

    id: 1, 
    title: 'hello',
    content: 'text',
    date: '12.12.2022.'
}])

  return (
    <Router>
    
    <Routes>
      <Route
       element={<Home/>}
       path='/' exact 
       articles={articles}
       SetArticles={SetArticles}
       />
      <Route 
      element={<About/>} 
      path='/about' exact />
      <Route 
       element={<Contact/>}
       path='/contact' exact/>
      <Route 
      element={<NotFound/>} 
      path='*'/>
    </Routes>
    
  </Router>
  )
}

export default BlueGridApp