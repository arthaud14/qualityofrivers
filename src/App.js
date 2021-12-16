import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cartographie from "./pages/Cartographie";
import Home from "./pages/Home";
import Liens from "./pages/Liens";
import Infos from "./pages/Infos";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import River from "./pages/River";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carthographie" component={Cartographie} />
        <Route path="/river" component={River} />
        <Route path="/liens" component={Liens} />
        <Route path="/infos" component={Infos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
