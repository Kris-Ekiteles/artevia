import React from 'react'
import { Link } from 'react-router-dom'

const Authorise = () => {
  return (
    <div className="login">
      <form method="Post">
        <label>Email</label>
        <input type="email" placeholder="example name@gmail.com" required />
        <label>password</label>
        <input type="password" placeholder="Enter password" required />
        <button type="submit"> Log in</button>
        <p>
            Dont have an account?
          <Link to="signup">signUp</Link>
        </p>
      </form>
    </div>
  );
}

export default Authorise
