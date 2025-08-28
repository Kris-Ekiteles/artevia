import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import About from './components/About';
import Authorise from './components/Authorise';
import Footer from './components/Footer';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/logIn/signUp">LogIn/SignUp</Link>
      </nav>

      <Routes>
        <Route path="/logIn/signUp" element={<Authorise />} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Cards />     
      {/* footer section component*/}
      <Footer />
    </div>
  );
}

export default App;
