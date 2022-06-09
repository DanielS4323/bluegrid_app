import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Details from "./pages/Details";

function App() {
  const [articles, SetArticles] = useState([]);
  const [contact, SetContact] = useState({});
  const [formIsSuccess, SetFormIsSuccess] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          element={<Home articles={articles} SetArticles={SetArticles} />}
          path="/"
          exact
        />

        <Route
          element={<Details articles={articles} />}
          path="/details/:id/:articleTitle"
          exact
        />
        <Route element={<About />} path="/about" exact />
        <Route
          element={
            <Contact
              contact={contact}
              SetContact={SetContact}
              formIsSuccess={formIsSuccess}
              SetFormIsSuccess={SetFormIsSuccess}
            />
          }
          path="/contact"
          exact
        />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  );
}

export default App;
