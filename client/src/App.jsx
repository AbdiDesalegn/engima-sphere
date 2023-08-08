import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./css/signup-style.css";
import Signup from "./components/Signup";
import Login from './components/Login';
import Home from "./components/home";
import UserProfile from "./components/UserProfile";
import PostCreation from "./components/PostCreation";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostContentCard from "./components/PostCard";

function App() {
  const [count, setCount] = useState(0);
  return <BrowserRouter>
  <Routes>
    <Route path="/register" element = {<Signup />}></Route>
    <Route path="/login" element = {<Login/>}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/userprofile" element ={<UserProfile />}></Route>
    <Route path="/user" element ={<PostContentCard />}></Route>
  </Routes>
  </BrowserRouter>;
}

export default App;
