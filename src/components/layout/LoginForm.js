import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../redux/actions/authAction";

const LoginForm = (props) => {
  const { isAuthenticated, routeHistory } = props;
  console.log(routeHistory);
  useEffect(() => {
    if (isAuthenticated) {
      routeHistory.push("/home");
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const { login } = props;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login");
    login({
      password,
      email,
    });
  };

  return (
    <div className="container">
      <div className="form-container login-form-container">
        <h1 className="login-form-header">
          Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="login-form-item">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="login-form-item">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            value="Login"
            className="btn btn-primary btn-block login-form-btn"
          >
            LOGIN
          </button>
        </form>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
