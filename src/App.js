import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState, createContext } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {

  const [articles, SetArticles] = useState([])
  const [contact, SetContact] = useState({})
  const [isSuccess, SetIsSucess] = useState(false)



  return (
    <Router>
    
    <Routes>
      <Route
       element={
       <Home
       articles={articles}
       SetArticles={SetArticles}/>}
       path='/' exact 
       />
      <Route 
      element={<About/>} 
      path='/about' exact />
      <Route 
       element={
       <Contact 
       contact={contact}
       SetContact={SetContact}
       isSuccess={isSuccess}
       SetIsSucess={SetIsSucess}
       />}
       path='/contact' exact/>
      <Route 
      element={<NotFound/>} 
      path='*'/>
    </Routes>
    
  </Router>
  );
}

export default App;
