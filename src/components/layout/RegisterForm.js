import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { register } from "../../redux/actions/authAction";

const RegisterForm = (props) => {
  const { register, isAuthenticated, routeHistory } = props;
  useEffect(() => {
    if (isAuthenticated) {
      routeHistory.push("/home");
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props.history]);

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
    register({
      name,
      email,
      password,
      password2,
    });
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
              required
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
              reuqired
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
              reuqired
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
              reuqired
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
export default connect(mapStateToProps, { register })(RegisterForm);
