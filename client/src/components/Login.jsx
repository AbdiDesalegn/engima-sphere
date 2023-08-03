
import React from 'react'
function Login(){
    return(
        <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h2 class="text-center mb-4">Login</h2>
            <form>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required/>
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
            <div class="text-center mt-3">
              <p>I don't have an account? <a href="/register">Sign Up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  

    )
}

export default Login;
