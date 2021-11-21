import React from "react";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main style={{marginTop: "120px  "}}>
      <p>C'est le contenu de la page</p>
      </main>

    </div>
  );
}

export default App;
