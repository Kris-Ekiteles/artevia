import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      <h3>hello about</h3>
  
  </div>
  );
}

export default App;
