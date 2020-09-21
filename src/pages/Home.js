import React, { Fragment, useEffect } from "react";
import AddBtn from "../components/layout/AddBtn";
import AddLogModal from "../components/logs/AddLogModal";
import EditLogModal from "../components/logs/EditLogModal";
import AddMemberModal from "../components/members/AddMemberModal";
import MemberListModal from "../components/members/MemberListModal";
import SearchBar from "../components/layout/SearchBar";
import Logs from "../components/logs/Logs";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const Home = () => {
  useEffect(() => {
    //Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddMemberModal />
        <MemberListModal />
      </div>
    </Fragment>
  );
};

export default Home;
