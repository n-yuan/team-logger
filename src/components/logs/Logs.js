import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItems";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../redux/actions/logActions";
import { logout } from "../../redux/actions/authAction";

const Logs = ({ log: { logs, loading, filtered, user }, getLogs, logout }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  const onLogout = () => {
    logout();
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
        <li>Hello {user && user.name}</li>
        <li>
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : filtered !== null ? (
        filtered.map((log) => <LogItem log={log} key={log._id} />)
      ) : (
        logs.map((log) => <LogItem log={log} key={log._id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs, logout })(Logs);
