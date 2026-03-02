import React from 'react';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-black">
      <div className="card bg-dark text-white p-4 border-secondary" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <div className="mb-3">
          <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="Email" />
        </div>
        <div className="mb-4">
          <input type="password" className="form-control bg-dark text-white border-secondary" placeholder="Password" />
        </div>
        <button className="btn btn-primary w-100 py-2">Login</button>
        <p className="mt-3 text-center small text-secondary">New here? <span className="text-primary">Create Account</span></p>
      </div>
    </div>
  );
};

export default Login;