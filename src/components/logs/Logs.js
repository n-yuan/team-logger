import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItems";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { getLogs } from "../../redux/actions/logActions";

const Logs = ({ log: { logs, loading, filtered }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="logs-container">
      <div className="row">
        {loading || logs === null ? (
          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "160px auto 0 auto",
            }}
          >
            <Spinner />
          </div>
        ) : !loading && logs.length === 0 ? (
          <p className="no-log-show">No logs to show...</p>
        ) : filtered !== null ? (
          filtered.map((log) => <LogItem log={log} key={log._id} />)
        ) : (
          logs.map((log) => <LogItem log={log} key={log._id} />)
        )}
      </div>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
