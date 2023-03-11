import React from "react";
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import FAQ from './components/FAQ/FAQ';
import FutureEvents from './components/FutureEvents/FutureEvents';
import Home from './components/Home/Home';
import NewArrival from './components/NewArrival/NewArrival';
import Sale from './components/Sale/Sale';
import Stories from './components/Stories/Stories';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contacts" element={<Contacts />}/>
        <Route path="/FAQ" element={<FAQ />}/>
        <Route path="/FutureEvents" element={<FutureEvents />}/>
        <Route path="/NewArrival" element={<NewArrival />}/>
        <Route path="/Sale" element={<Sale />}/>
        <Route path="/Stories" element={<Stories />}/>

      </Routes>
    </Router>
  );
}

export default App;
