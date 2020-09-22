import React from "react";
import Logo from "../../images/Logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="#home" className="navbar-brand">
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
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">
                  Contact us
                </a>
              </li>
              <button className="nav-btn">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
