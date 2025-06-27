import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
import Uslugi from "./pages/Uslugi";
import './App.css'
import Footer from "./components/Footer";
import Blog from "./pages/Blog";

function App() {

  return (
    
   <BrowserRouter>
      <Header /> {/* Показывается на всех страницах */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
