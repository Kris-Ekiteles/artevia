import React from 'react'
import "./Cards.css"
import nature from "../Assets/abstract-nature-painted.jpg";

const Cards = () => {
  return (
    <div className="card">
      <img src={nature}/>
      <h3>first pic</h3>
      <p>this is the description</p>
      <p>this is price </p>
      <button>add</button>
    </div>
  );
}

export default Cards
