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
    // Simulate an async operation like data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
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