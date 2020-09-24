import React from "react";
import { connect } from "react-redux";

const Alerts = (props) => {
  const { alert } = props;

  console.log(alert);

  return (
    alert.length > 0 &&
    alert.map((alert) => (
      <div key={alert.id} className={`${alert.type}`}>
        <i className="fas-fa-info-circle"></i> {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});
export default connect(mapStateToProps)(Alerts);
