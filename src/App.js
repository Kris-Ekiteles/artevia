import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/about" element={<About />}/>
      </Routes>
      {/* footer section component*/}
      <Footer />  
  </div>
  );
}

export default App;
