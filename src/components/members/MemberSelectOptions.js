import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMembers } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";

const MemberSelectOptions = ({ getMembers, member: { members, loading } }) => {
  useEffect(() => {
    getMembers();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    members !== null &&
    members.map((m) => (
      <option m={m.id} value={`${m.firstName} ${m.lastName}`}>
        {m.firstName} {m.lastName}
      </option>
  ))
  );
};

MemberSelectOptions.PropTypes = {
  getMembers: PropTypes.func.isRequired,
  member: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  member: state.member,
});
export default connect(mapStateToProps, { getMembers })(MemberSelectOptions);
