import React from 'react'
import { Link } from 'react-router-dom'
import "./Authorise.css"

const Authorise = () => {
  return (
    
      <div className="login">
        <form method="Post">
          <h3>Log In</h3>
          <input type='input' placeholder='name'/>
          <label>Email</label>
          <input type="email" placeholder="example name@gmail.com" required />
          <label>password</label>
          <input type="password" placeholder="Enter password" required />
          <div className='submit-class'>
            <div className='submit'>login</div>
            <div className='submit'>signUp</div>
          </div>
          
        </form>
      </div>
    
  );
}

export default Authorise
