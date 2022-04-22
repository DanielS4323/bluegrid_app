import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {



  return (
   <Router>
    
     <Routes>
       <Route element={<Home/>} path='/' exact />
       <Route element={<About/>} path='/about' exact />
       <Route element={<Contact/>} path='/contact' exact/>
       <Route element={<NotFound/>} path='*'/>
     </Routes>
     
   </Router>
  );
}

export default App;
