import { Routes, Route } from "react-router-dom"
import Home from "./screens/Home/Home.jsx"
import Navbar from './components/Navbar/Navbar.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
