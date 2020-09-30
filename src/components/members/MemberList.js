import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMembers } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";
import MemberItem from "./MemberItem";
import Spinner from "../layout/Spinner";

const MemberList = ({ getMembers, member: { members, loading } }) => {
  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="member-list-container">
      <div className="background-img-left-corner"></div>
      <div className="row">
        {loading || members === null ? (
          <div
            style={{
              width: "100px",
              height: "100px",
              margin: "160px auto 0 auto",
            }}
          >
            <Spinner />
          </div>
        ) : !loading && members.length === 0 ? (
          <p className="no-members-show">Please add members</p>
        ) : (
          !loading &&
          members !== null &&
          members.map((member) => (
            <MemberItem member={member} key={member._id} />
          ))
        )}
      </div>
    </div>
  );
};

MemberList.propTypes = {
  member: PropTypes.object.isRequired,
  getMembers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  member: state.member,
  loading: state.member.loading,
});

export default connect(mapStateToProps, { getMembers })(MemberList);
