import React from 'react'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Gallery from './pages/Gallery';
import About from './pages/About'
import Prices from './pages/Prices'
import Contact from './pages/Contact'
import PricesNorthAmerican from './pages/PricesNorthAmerican';
import PricesAfricanAndExotics from './pages/PricesAfricanAndExotics';
import PricesNewZelandAndOther from './pages/PricesNewZelandAndOther';
import Positions from './pages/Positions'


function App() {
  return (
    <>
     <Router basename={process.env.PUBLIC_URL} >
        <Navbar/>
        <Routes >
          <Route path='/' element={<Home/>} exact />
          <Route path="/gallery" element={<Gallery />}/> 
          <Route path="/about" element={<About />}/> 
          <Route path="/contact" element={<Contact />}/>
          <Route path="/prices" element={<Prices />}/>
          <Route path="/pricesNorthAmerican" element={<PricesNorthAmerican />}/>
          <Route path="/pricesAfricanAndExotics" element={<PricesAfricanAndExotics />}/>
          <Route path="/pricesNewZelandAndOther" element={<PricesNewZelandAndOther />}/>
          <Route path="/positions" element={<Positions />}/>
        </Routes>
     </Router>
     
    </>
  );
}

export default App;
