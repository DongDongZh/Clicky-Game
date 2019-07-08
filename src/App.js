import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Footer from "./components/Footer"; 

function App() {
  return (
    <div>
      <Intro />
      <Cards />
      <Footer />
    </div>);
}

export default App;
