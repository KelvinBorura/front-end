import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and other necessary components from react-router-dom
import './App.css';
import Login from './components/login';


function App() {
  return (
    <Router> 
      <div className="App">
        <Routes> 
          <Route path="/" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
