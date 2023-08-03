import React, { useState } from 'react';
import axios from 'axios';
import '../css/signup-style.css';

const Signup = () => {
  const [name , setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const handleSummit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  
  
  return (
    <div class="container my-5" onSubmit={handleSummit}>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="text-center mb-4">Sign Up</h2>
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" name="username" required
                 onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" required
                onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" required
                onChange={(e)=> setPassword(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" name="confirmPassword" required/>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="terms" required/>
                <label class="form-check-label" for="terms">I agree to the terms and conditions</label>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
            </form>
            <div class="text-center mt-3">
              <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
};

export default Signup;
