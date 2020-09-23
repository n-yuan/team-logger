import React from "react";
import { connect } from "react-redux";
import { deleteMember } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";

const MemberItem = ({ member, deleteMember }) => {
  const onDelete = () => {
    deleteMember(member._id);
  };
  return (
    <div className="col-lg-4 col-md-6">
      <div className="member-item-container">
        <div className="member-card-circle ">
          <i class="fas fa-circle fa-2x"></i>
        </div>
        <div className="member-card-name">
          {member.firstName} {member.lastName}
        </div>
        <div className="badge-delete" onClick={onDelete}>
          DELETE
        </div>
        <div className="member-card-title">{member.title}</div>
        <div className="member-card-email">{member.email}</div>
        <div className="member-card-phone">{member.phone}</div>
      </div>
    </div>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  deleteMember: PropTypes.func.isRequired,
};

export default connect(null, { deleteMember })(MemberItem);
