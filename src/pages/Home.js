import React, { Fragment, useEffect } from "react";
import AddBtn from "../components/layout/AddBtn";
import AddLogModal from "../components/logs/AddLogModal";
import EditLogModal from "../components/logs/EditLogModal";
import AddMemberModal from "../components/members/AddMemberModal";
import MemberListModal from "../components/members/MemberListModal";
import SearchBar from "../components/layout/SearchBar";
import Logs from "../components/logs/Logs";
import Navbar from "../components/layout/Navbar";
import { connect } from "react-redux";
import { loadUser } from "../redux/actions/authAction";
import PropTypes from "prop-types";

const Home = (props) => {
  const { loadUser } = props;
  useEffect(() => {
    loadUser();
  },[]);
  return (
    <Fragment>
      <Navbar />
      <SearchBar />
      <div className="container">
        {/* <AddBtn /> */}
        <Logs />

        {/* <AddLogModal /> */}
        {/* <EditLogModal /> */}
        {/* <AddMemberModal /> */}
        {/* <MemberListModal /> */}
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};
export default connect(null, { loadUser })(Home);
