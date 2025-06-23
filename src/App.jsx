
import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import {useState} from "react"

import Header from './shared/Header';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import Fridge from './components/Fridge';


import Footer from './shared/Footer';
import UpdateFridge from './components/UpdateFridge';
import Contact from "./components/Contact";
// import Pantry from './components/Pantry';
// import Resources from './components/Resources';

function App() {
// const [user,setUser]=useState(
//   JSON.parse(localStorage.getItem("user")) || {}
// );
  return(
    <div className="App"> 
<main> 
    <Header/> 
   <Routes> 
   <Route path="/" element={<Home/>} />
   <Route path="/about" element={<About/>} /> 

  <Route path="/SignUp" element={<SignUp/>} /> 
   <Route path="/Login" element={<Login/>} /> 


 <Route path="/fridge" element={<Fridge/>} />
  <Route path="/update/:id" element={<UpdateFridge/>}/> 

  <Route path="/contact" element={<Contact/>} /> 
  
  </Routes>
  </main>
<Footer/>
  </div>

  );
}

export default App;


