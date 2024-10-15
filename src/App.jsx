// import React from 'react'
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Privacy from "./components/Privacy";
// import { BrowserRouter as Router, Routes, Route ,  } from "react-router-dom";

import Projects from "./components/Projects";
import Services from "./components/Services";
const App = () => {
  return (
    <div className="font-lily" id="home">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;
