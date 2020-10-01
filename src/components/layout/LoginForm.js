import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, setLoading, clearErrors } from "../../redux/actions/authAction";
import { setAlert } from "../../redux/actions/alertAction";

const LoginForm = (props) => {
  const {
    isAuthenticated,
    routeHistory,
    error,
    login,
    setAlert,
    clearErrors,
    setLoading,
  } = props;
  useEffect(() => {
    if (isAuthenticated) {
      routeHistory.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      setLoading();
      login({
        password,
        email,
      });
    }
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {
  login,
  setAlert,
  setLoading,
  clearErrors,
})(LoginForm);
