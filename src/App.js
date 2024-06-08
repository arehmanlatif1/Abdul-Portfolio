import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import LoadingPage from './components/LoadingPage/LoadingPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LoadingPage />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;