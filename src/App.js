import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";
import ContactProvider from "./store/Contact-Context/ContactProvider";

function App() {
  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route
            element={<Details />}
            path="/details/:id/:articleTitle"
            exact
          />
          <Route element={<About />} path="/about" exact />
          <Route element={<Contact />} path="/contact" exact />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </ContactProvider>
  );
}

export default App;
