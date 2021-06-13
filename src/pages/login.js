import React from 'react'
import CryptoJs from 'crypto-js'
import { Link } from 'gatsby'

const axios = require('axios')
/* https://linguinecode.com/post/how-to-get-form-data-on-submit-in-reactjs */

const Login = () => {
  const initialFormData = Object.freeze({
    username: '',
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
    const pwd = CryptoJs.MD5(formData.password).toString()
    const data = {
      identifier: formData.username,
      password: pwd,
    }

    return new Promise((resolve, reject) => {
      debugger
      axios
        .post('https://54.156.73.182/auth/local', data)
        .then(result => {
          const { data } = result
          window.location.pathname = '/'
          localStorage.token = result.data.jwt
          localStorage.isAuthenticated = true
          console.log({ result })
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
            Don't have an account?
            <Link to={`/signup`}>
              <a href="#"> sign Up</a>
            </Link>
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

export default Login
