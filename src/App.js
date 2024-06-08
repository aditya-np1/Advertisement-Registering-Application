import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Offer from "./Components/Offers/Offer";
import Popular from "./Components/Popular/Popular";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
       <About/>
      <Footer/>  
    </>
  );
};

export default App;
