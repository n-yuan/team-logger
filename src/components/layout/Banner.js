import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import officeWork from "../../images/office-work.svg";

const Banner = (props) => {
  const {
    log: { logs },
    auth: { user },
  } = props;

  const [attentionCount, setAttentionCount] = useState(0);

  const onSetCount = (logs) => {
    var count = 0;
    logs.forEach((log) => {
      if (log.attention === true) {
        count = count + 1;
      }
    });
    setAttentionCount(count);
  };

  useEffect(() => {
    if (logs) {
      onSetCount(logs);
    }
  }, [logs]);

  return (
    <div className="banner-container">
      <div className="row">
        <div className="col-lg-6">
          <div className="banner-header">
            <h1 className="banner-greeting">Howdy,{user && user.name}!</h1>
            <p>You have {logs ? logs.length : 0} logs currently.</p>
            <p>You have {attentionCount} urgent logs currently.</p>
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
  log: state.log,
});

export default connect(mapStateToProps)(Banner);
