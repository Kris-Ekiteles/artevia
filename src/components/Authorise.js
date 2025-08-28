import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Authorise.css"

const Authorise = () => {
  const [action, setAction] = useState("sign Up")
  return (
    <div className="login">
      <form method="Post">
        <h3>{action}</h3>
        {action === "login" ? (
          <div></div>
        ) : (
          <div>
            <input type="input" placeholder="name" />
          </div>
        )}

        <label>Email</label>
        <input type="email" placeholder="example name@gmail.com" required />
        <label>password</label>
        <input type="password" placeholder="Enter password" required />
        {action === "login" ? (
          <div></div>
        ) : (
          <div className="Forgot">
            <p>Forgot password</p>
          </div>
        )}

        <div className="submit-class">
          <div
            className={action === "login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("login");
            }}
          >
            login
          </div>
          <div
            className={action === "sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("sign Up");
            }}
          >
            sign Up
          </div>
        </div>
      </form>
    </div>
  );
}

export default Authorise
