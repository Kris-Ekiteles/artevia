import React from 'react'
import "./Cards.css"


const Cards = (props) => {
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
