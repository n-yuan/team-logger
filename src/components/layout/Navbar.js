import React from "react";
import Logo from "../../images/Logo.png";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const {
    isAuthenticated,
    logout,
    auth: { user },
  } = props;
  const onLogout = () => {
    logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-container">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src={Logo} alt="logo-pic" style={{ width: "55px" }} />
            Team Logger
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="custom-toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link"
                  onClick={() => props.onClick("landing-image")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Contact us
                </a>
              </li>
              {isAuthenticated ? (
                <div className="logout-item">
                  <li>
                    <li className="logout-greeting">Hello {user && user.name}</li>
                    <a onClick={onLogout} href="#!">
                      <i className="fas fa-sign-out-alt fa-lg"></i>
                      <span className="hide-sm logout-caption">Logout</span>
                    </a>
                  </li>
                </div>
              ) : (
                <button
                  className="nav-btn"
                  onClick={() => props.onClick("login")}
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Navbar);
