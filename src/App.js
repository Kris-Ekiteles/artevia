import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import About from './components/About';
import Authorise from './components/Authorise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/logIn/signUp">LogIn/SignUp</Link>
      </nav>
      
      <Routes>
        <Route path="/logIn/signUp" element={<Authorise />}/>
        
      </Routes>
      {/* footer section component*/}
      <Footer />  
  </div>
  );
}

export default App;
