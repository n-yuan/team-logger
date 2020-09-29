import React, { Fragment, useEffect } from "react";
import AddMemberModal from "../components/members/AddMemberModal";
import MemberList from "../components/members/MemberList";
import Banner from "../components/layout/Banner";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import { connect } from "react-redux";
import { loadUser } from "../redux/actions/authAction";
import PropTypes from "prop-types";

const Member = (props) => {
  const { loadUser } = props;
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Background />
      <Navbar />
      <div className="home-container">
        <div className="container">
          <Banner />
          <AddMemberModal />
          <MemberList />
        </div>
      </div>
    </Fragment>
  );
};

Member.propTypes = {
  loadUser: PropTypes.func.isRequired,
};
export default connect(null, { loadUser })(Member);
