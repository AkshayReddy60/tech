import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import About from './About/about';
import Indiaupdate from './Indiaupdate/indiaupdate';
import Opportunities from './Opportunities/opportunities';
import Biobizcon from './Biobizcon/biobizcon';
import InnovationIn from './InnovationIn/innovationinsight';
import Insights from './Insights/insight';
import Bring from './Bring/bring';
import Contact from './Contact/contact';
import Navbar from './Navbar/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/indiaupdate" element={<Indiaupdate />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/biobizcon" element={<Biobizcon />} />
        <Route path="/innovationinsight" element={<InnovationIn />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/bring" element={<Bring />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
