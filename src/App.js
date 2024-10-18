import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../src/components/navbar';
// import SearchForm from '../src/components/SearchForm';
import StartRenewal from './pages/StartRenewal';
import ShowDifferences from './pages/ShowDifferences';
import "../src/App.css";
import Home from './pages/Home';
function App() {
  return (
    
    <Router>
    {/* The Navbar will always render */}
    <CustomNavbar />
    
    {/* Switch component renders the first matching route */}
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/StartRenewal" element={<StartRenewal />} />,
      <Route path="/ShowDifferences" element={<ShowDifferences />} />
          {/* You can add more routes as needed */}
    </Routes>
  </Router>
  );
}

export default App;

