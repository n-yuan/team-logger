import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { searchLogs, clearSearchLogs } from "../../redux/actions/logActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLogs, clearSearchLogs, log: { filtered } }) => {
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== " ") {
      return searchLogs(e.target.value);
    } else {
      return clearSearchLogs();
    }
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { searchLogs })(SearchBar);
