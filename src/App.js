import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Authorise from './components/Authorise';
import Footer from './components/Footer';
import Cards from './components/Cards';
// import nature from "./assests/abstract-nature-painted.jpg"

function App() { 
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/logIn/signUp">LogIn/SignUp</Link>
      </nav>

      <Routes>
        <Route path="/#" element={<Home />} />
        <Route path="/logIn/signUp" element={<Authorise />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <div className="painting">
        <Cards
          // img={nature}
          name="painting"
          description="this is the nature painting"
          price="100 k"
          button="order"
        />
        <Cards
          // img={nature}
          name="nature"
          description="this is the nature painting"
          price="50 k"
          button="order"
        />
        <Cards
          // img={nature}
          name="painting"
          description="this is the nature painting"
          price="100 k"
          button="order"
        />
        <Cards
          // img={nature}
          name="painting"
          description="this is the nature painting"
          price="100 k"
          button="order"
        />
      </div>
      <div className="sculptures">
        <Cards
          // img={}
          name="sculpture1"
          description="this is a sculpture"
          price="5k"
          button="order"
        />
        <Cards
          // img={}
          name="sculpture2"
          description="this is second sculpture"
          price="15k"
          button="order"
        />
        <Cards
          // img={}
          name="sculpture2"
          description="this is second sculpture"
          price="15k"
          button="order"
        />
        <Cards
          // img={}
          name="sculpture2"
          description="this is second sculpture"
          price="15k"
          button="order"
        />
      </div>
      {/* footer section component*/}
      <Footer />
    </div>
  );
}

export default App;
