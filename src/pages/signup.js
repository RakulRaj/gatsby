import React from 'react'
import CryptoJs from 'crypto-js';
import { Link, Redirect } from 'react-router-dom';

const axios = require('axios')
/* https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs */

const Signup = () => {
  const initialFormData = Object.freeze({
    username: '',
    email: '',
    password: '',
  })
  const [formData, updateFormData] = React.useState(initialFormData)
  const handleChange = e => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    })
  }
  const sendData = e => {
    e.preventDefault()
    console.log({ formData })
    debugger
    const pwd = CryptoJs.MD5(formData.password).toString();
    const data = {
      username: formData.username,
      email: formData.email,
      confirmed: true,
      password: pwd,
    }
debugger
    return new Promise((resolve, reject) => {
      debugger
      axios
        .post(
          'http://localhost:1337/users',
           data
        )
        .then(result => {
          if (result.statusText==="Created") {
            localStorage.token = result.data.jwt;
            localStorage.isAuthenticated = true;
            <Redirect to="/login"/>;
          }
          /**
           * creates a dynamic page with the data received
           * injects the data into the context object alongside with some options
           * to configure js-search
           */
          resolve()
        })
        .catch(err => {
          console.log({ err })
          console.log('====================================')
          console.log(`error creating Page:${err}`)
          console.log('====================================')
          reject(new Error(`error on page creation:\n${err}`))
        })
    })
  }
  return (
    <>
      <div className="card">
        <form>
          <h2 className="title"> Log in</h2>
          <p className="subtitle">
            Don't have an account? <a href="#"> sign Up</a>
          </p>
          <p className="or">
            <span>or</span>
          </p>
          <div className="email-login">
            <label htmlFor="email">
              {' '}
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              onChange={handleChange}
            />
             <label htmlFor="email">
              {' '}
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              onChange={handleChange}
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button className="cta-btn" onClick={sendData}>
            Log In
          </button>
          <a className="forget-pass" href="#">
            Forgot password?
          </a>
        </form>
      </div>
    </>
  )
}

export default Signup
