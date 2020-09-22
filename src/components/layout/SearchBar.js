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
    <div className="input-field-search-bar">
      <input
        type="search"
        placeholder="Search Logs..."
        ref={text}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  clearSearchLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { searchLogs, clearSearchLogs })(
  SearchBar
);
