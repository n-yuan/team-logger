import React, { Fragment } from "react";
import AddBtn from "../components/layout/AddBtn";
import AddLogModal from "../components/logs/AddLogModal";
import EditLogModal from "../components/logs/EditLogModal";
import AddMemberModal from "../components/members/AddMemberModal";
import MemberListModal from "../components/members/MemberListModal";
import SearchBar from "../components/layout/SearchBar";
import Logs from "../components/logs/Logs";

const Home = () => {
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        {/* <Logs /> */}
        {/* <AddLogModal /> */}
        {/* <EditLogModal /> */}
        {/* <AddMemberModal /> */}
        {/* <MemberListModal /> */}
      </div>
    </Fragment>
  );
};

export default Home;
