import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItems";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";
import { getLogs } from "../../redux/actions/logActions";


const Logs = ({ log: { logs, loading, filtered }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div className="logs-container">
      <div className="row">
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
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
