import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./css/signup-style.css";
import Signup from "./components/states/Signup";
import Login from './components/states/Login';
import Home from "./components/states/home";
import UserProfile from "./components/UserProfile";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostContentCard from "./components/cards/PostCard";
import ResponsiveAppBar from "./components/cards/PrimarySearchAppBar";


function App() {
  const [count, setCount] = useState(0);
  return <BrowserRouter>
  <Routes>
    <Route path="/register" element = {<Signup />}></Route>
    <Route path="/login" element = {<Login/>}></Route>
    <Route path="/" element ={<Home />}></Route>
    <Route path="/userprofile" element ={<UserProfile />}></Route>
    <Route path="/user" element ={<PostContentCard />}></Route>
    <Route path="/test" element ={<ResponsiveAppBar />}></Route>
    
  </Routes>
  </BrowserRouter>;
}

export default App;
