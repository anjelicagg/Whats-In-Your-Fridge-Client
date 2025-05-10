// import { useState } from 'react'
import './App.css';
import React from 'react';
import About from './components/About';
import Fridge from './components/Fridge';
import Home from './components/Home';
import Pantry from './components/Pantry';
// import Resources from './components/Resources';
import Header from './shared/Header';
import Footer from './shared/Footer';

function App() {
  // const {user,setUser}=useState("")
  return(
    <div className="App"> 
    <Header/>
    <Home/>
    <About/>
    <Fridge />
   <Pantry />
   {/* < Resources /> */}
   <Footer /> */
  </div>

  )
}

export default App;


