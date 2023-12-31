import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Horizental from "./Components/Horizental/Horizental";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QnA from "./Components/QnA/QnA";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Horizental></Horizental>
      <Home></Home>
      <ToastContainer></ToastContainer>
      <QnA></QnA>
    </div>
  );
}

export default App;
