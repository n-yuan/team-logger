import React from "react";
import Logo from "../../images/Logo.png";
import LandingImage from "../../images/Landing-img.svg";
import Register from "../../pages/Register";

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

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Welcome to <span style={{ color: "#195CE8" }}>Team Logger</span>:{" "}
              <br />
              An <span style={{ color: "#A1C4E3" }}>Efficient</span> and{" "}
              <span style={{ color: "#A1C4E3" }}>simple </span>tool
            </h1>
            <p>
              Dedicated to improving team work experience and boosting
              productivity.
            </p>
            <div className="intro-btn-container">
              <button className="intro-btn">GET START</button>
            </div>
          </div>

          <div className="col-lg-6">
            {/* <img
              src={LandingImage}
              alt="landing-image"
              className="landing-image"
            /> */}
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
