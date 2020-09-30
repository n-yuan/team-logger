import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authAction";
import { setAlert } from "../../redux/actions/alertAction";

const RegisterForm = (props) => {
  const {
    register,
    isAuthenticated,
    routeHistory,
    error,
    setAlert,
    clearErrors,
  } = props;
  useEffect(() => {
    if (isAuthenticated) {
      routeHistory.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === " " || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container register-form-container">
        <h1 className="register-form-header">
          Account <span className="text-primary">Register</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="name" className="register-form-item">
                Team Name
              </label>
            </div>
            <input
              type="text"
              name="name"
              value={name}
              required={true}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="email" className="register-form-item">
                Email Address
              </label>
            </div>
            <input
              type="email"
              name="email"
              value={email}
              required={true}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="password" className="register-form-item">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              value={password}
              required={true}
              minLength="6"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="password2" className="register-form-item">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="password2"
              value={password2}
              required={true}
              minLength="6"
              onChange={onChange}
            />
          </div>
          <button
            type="submit"
            value="Register"
            className="btn btn-primary register-form-btn"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, setAlert })(RegisterForm);
