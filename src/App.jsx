import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import Barre from "./Components/Barre";
import Security from "./Components/Security";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
      <Barre />
      <Security />
      <Footer />
    </div>
  );
};
export default App;
