import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../redux/actions/logActions";

const LogItems = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log._id);
  };
  return (
    <div className="col-lg-4 col-md-6">
      <div className="log-item-container">
        <span className="badge badge-name badge-pill">{log.member}</span>
        <span className="badge-delete" onClick={onDelete}>
          DELETE
        </span>

        <div className="log-message">
          <div
            className={`${log.attention ? "orange-text" : "blue-text"}`}
            onClick={() => {
              setCurrent(log);
            }}
          >
            <span className="log-message-header">Logs:</span> {log.message}
          </div>
        </div>
        <br />
        <span className="log-update-time">
          Last updated on:
          <br />
          <i class="far fa-calendar-times"></i>{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
      </div>
    </div>
  );
};

LogItems.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItems);
