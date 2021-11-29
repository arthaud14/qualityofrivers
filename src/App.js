import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cartographie from "./pages/Cartographie";
import Home from "./pages/Home";
import Liens from "./pages/Liens";
import Infos from "./pages/Infos";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carthographie" element={<Cartographie />} />
        <Route path="/liens utiles" element={<Liens />} />
        <Route path="/les infos" element={<Infos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
