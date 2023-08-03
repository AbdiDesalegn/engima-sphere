import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/signup-style.css";
import Signup from "./components/Signup";
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  return <BrowserRouter>
  <Routes>
    <Route path="/register" element = {<Signup />}></Route>
    <Route path="/login" element = {<Login/>}></Route>
  </Routes>
  </BrowserRouter>;
}

export default App;
