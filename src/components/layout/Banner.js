import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import officeWork from "../../images/office-work.svg";

const Banner = (props) => {
  const {
    auth: { user },
  } = props;
  return (
    <div className="banner-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-header">
            <h1>Howdy,{user && user.name}!</h1>
            <p>You have 5 logs currently.</p>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={officeWork}
            alt="office-work"
            className="office-work-image"
          />
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Banner);
