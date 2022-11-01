import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import "./Signin.css"

function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src="" alt="" />
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <input type="submit" id="login-btn" value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signin;
