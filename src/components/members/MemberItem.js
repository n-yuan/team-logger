import React from "react";
import { connect } from "react-redux";
import { deleteMember } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";

const MemberItem = ({ member, deleteMember }) => {
  const onDelete = () => {
    deleteMember(member._id);
  };
  return (
    <div className="member-item-container">
      {member.firstName} {member.lastName}
      <div className="trash-icon" onClick={onDelete}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  deleteMember: PropTypes.func.isRequired,
};

export default connect(null, { deleteMember })(MemberItem);
