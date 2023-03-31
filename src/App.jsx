import { useState } from "react";
import "./App.css";
import Horizental from "./Horizental/Horizental";
import Navbar from "./Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Horizental></Horizental>
    </div>
  );
}

export default App;
