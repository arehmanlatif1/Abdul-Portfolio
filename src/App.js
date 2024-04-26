import { Routes, Route } from "react-router-dom"
import Home from "./screens/Home/Home.jsx"
import Navbar from './components/Navbar/Navbar.jsx';
import Contact from "./screens/Contact/Contact.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
  );
}

export default App;
