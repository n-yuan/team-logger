import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import LandingImage from "../images/Landing-img.svg";
import RegisterForm from "../components/layout/RegisterForm";
import LoginForm from "../components/layout/LoginForm";
import { setCurrent } from "../redux/actions/logActions";

const Landing = (props) => {
  const [currentForm, setCurrentForm] = useState(null);

  const onClick = (currentForm) => {
    setCurrentForm(currentForm);
  };

  const { history } = props;

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
              <RegisterForm routeHistory={history} />
            ) : currentForm === "login" ? (
              <LoginForm routeHistory={history} />
            ) : (
              <img
                src={LandingImage}
                alt="landing-image"
                className="landing-image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
