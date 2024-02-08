import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import Layout from "./Layout.jsx";
import Protfolio from "./Protfolio/Protfolio.jsx";
import About from "./About/About.jsx";
import Notfound from "./Home/Notfound.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="protfolio" element={<Protfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Notfound/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
