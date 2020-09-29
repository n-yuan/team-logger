import React, { Fragment, useEffect } from "react";
import AddLogModal from "../components/logs/AddLogModal";
import EditLogModal from "../components/logs/EditLogModal";
import SearchBar from "../components/layout/SearchBar";
import Banner from "../components/layout/Banner";
import Logs from "../components/logs/Logs";
import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import { connect } from "react-redux";
import { loadUser } from "../redux/actions/authAction";
import PropTypes from "prop-types";

const Home = (props) => {
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
        <div className="background-img-left-corner"></div>
        <div className="container">
          <Banner />
          <div className="row">
            <div className="col-lg-6">
              <SearchBar />
            </div>
            <div className="col-lg-6">
              <AddLogModal />
            </div>
          </div>
          <Logs />
          <EditLogModal />
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func.isRequired,
};
export default connect(null, { loadUser })(Home);
