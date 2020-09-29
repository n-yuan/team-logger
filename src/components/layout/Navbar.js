import React from "react";
import Logo from "../../images/Logo.png";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
        <div className="container">
          {isAuthenticated ? (
            <a href="/home" className="navbar-brand-home">
              <img src={Logo} alt="logo-pic" style={{ width: "55px" }} />
              Team Logger
            </a>
          ) : (
            <a href="/landing" className="navbar-brand-landing">
              <img src={Logo} alt="logo-pic" style={{ width: "55px" }} />
              Team Logger
            </a>
          )}

          <div className="collapse navbar-collapse" id="navbarResponsive">
            {isAuthenticated && (
              <ul className="nav-log-member navbar-nav mr-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    // onClick={() => props.onClick("landing-image")}
                  >
                    Logs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/member"
                    className="nav-link"
                    // onClick={() => props.onClick("landing-image")}
                  >
                    Members
                  </Link>
                </li>
              </ul>
            )}

            {isAuthenticated ? (
              <ul className="navbar-nav ml-auto">
                <div className="logout-item">
                  <li>
                    <li className="logout-greeting">
                      Hello {user && user.name}
                    </li>
                    <a onClick={onLogout} href="#!" className="logout-caption-container">
                      <i className="fas fa-sign-out-alt fa-lg"></i>
                      <span className="hide-sm logout-caption">Logout</span>
                    </a>
                  </li>
                </div>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto nav-home">
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
                <button
                  className="nav-btn"
                  onClick={() => props.onClick("login")}
                >
                  Login
                </button>
              </ul>
            )}
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
