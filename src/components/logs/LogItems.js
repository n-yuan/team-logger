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
    <div className="log-item-container">
      <span>ID #{log._id}</span>
      <br />
      <div
        href=""
        className={`${log.attention ? "orange-text" : "blue-text"}`}
        onClick={() => {
          setCurrent(log);
        }}
      >
        {log.message}
      </div>
      <br />
      <span>
        Last updated by <span>{log.member}</span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
      </span>
      <div className="trash-icon" onClick={onDelete}>
        <i className="far fa-trash-alt"></i>
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
