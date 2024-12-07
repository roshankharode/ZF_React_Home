import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS for dropdowns, toggles
import "../App.css"; // Import custom styles if needed
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Singlesourcepcba from "./Single_source_pcba";
import Home_page from './Home_page';
import Std_notes from './Std_notes';
import Implementation from './Implementation';
import Subscription from './Subcription';


function ZF_Navbar() {
  const maxLength = 7;
  const [formData, setFormData] = useState({
    input1: '',
  });

  // Handle change for any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the entire form data object to localStorage
    localStorage.setItem('input1', formData.input1);
    // Clear the form data after saving
    setFormData({
      input1: '',
    });
    // Reload the page after saving
    window.location.reload();
  };


  const handleReset = () => {
    // Clear the localStorage
    localStorage.removeItem('formData'); // Removes only 'formData' key
    // setStoredData(null); 
    // setPartNumber('');
  };


  return (
    <Router>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary menu-bar" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ZF
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/single-source-pcba">
                  PCBA
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Std_notes">
                  Std Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Implementation">
                  CN-Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Subscription">
                  Subcription
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="text"
                name="input1" // Make sure the correct input field is used
                value={formData.input1} // Bind the input1 state value
                onChange={handleChange}
                maxLength={maxLength}
                placeholder="Part Number"
              />
              <button className="btn btn-outline-success" type="submit" >
                Save
              </button>
              <button onClick={handleReset} className="btn btn-outline-success reset">
                Reset
              </button>
            </form>cd ZF
          </div>
        </div>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/single-source-pcba" element={<Singlesourcepcba />} />
        <Route path='/Std_notes' element={<Std_notes />} />
        <Route path='/Implementation' element={<Implementation />} />
        <Route path='/Subscription' element={<Subscription />} />
      </Routes>
    </Router>
  );
}

export default ZF_Navbar;
