import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import LandingImage from "../images/Landing-img.svg";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { setCurrent } from "../redux/actions/logActions";

const Landing = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const onClick = (currentForm) => {
    setCurrentForm(currentForm);
  };

  return (
    <div className="landing-page-wrapper">
      <Navbar onClick={onClick} />
      <div className="container landing-container">
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Welcome to <span style={{ color: "#195CE8" }}>Team Logger</span>
              : <br />
              An <span style={{ color: "#A1C4E3" }}>Efficient</span> and{" "}
              <span style={{ color: "#A1C4E3" }}>simple </span>tool
            </h1>
            <p>
              Dedicated to improving team work experience and boosting
              productivity.
            </p>
            <div className="intro-btn-container">
              <button className="intro-btn" onClick={() => onClick("register")}>
                GET START
              </button>
            </div>
            <div className="background-img-left-corner"></div>
            <div className="background-img-work"></div>
          </div>

          <div className="col-lg-6">
            {currentForm === "register" ? (
              <Register />
            ) : currentForm === "login" ? (
              <Login />
            ) : (
              <img
                src={LandingImage}
                alt="landing-image"
                className="landing-image"
              />
            )}

            {/* <Register /> */}
            {/* <Login /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
