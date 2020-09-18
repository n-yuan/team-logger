import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Login</span>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" value="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value="password" required />
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Login;
