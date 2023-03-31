import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Horizental from "./Components/Horizental/Horizental";
import Navbar from "./Components/Navbar/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Horizental></Horizental>
      <Home></Home>
    </div>
  );
}

export default App;
