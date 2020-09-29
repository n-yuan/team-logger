import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMembers } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";
import MemberItem from "./MemberItem";

const MemberList = ({ getMembers, member: { members, loading } }) => {
  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="background-img-left-corner"></div>
      <div className="row">
        {!loading &&
          members !== null &&
          members.map((member) => (
            <MemberItem member={member} key={member._id} />
          ))}
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
});

export default connect(mapStateToProps, { getMembers })(MemberList);
