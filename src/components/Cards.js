import React from 'react'
import "./Cards.css"
import { useLocation } from 'react-router-dom';


const Cards = (props) => {

  
  const location = useLocation();
  const hideLoginPaths = ["/logIn/signUp", "/about"];

  if (hideLoginPaths.includes(location.pathname)) {
    return null;
  }

  return (
    
    <div className="card">
     
      {/* for props */}
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price} </p>
      <button>{props.button}</button>
    </div>
    
  );
}

export default Cards
