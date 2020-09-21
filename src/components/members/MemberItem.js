import React from "react";
import { connect } from "react-redux";
import { deleteMember } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";

const MemberItem = ({ member, deleteMember }) => {
  const onDelete = () => {
    deleteMember(member._id);
    
  };
  return (
    <li className="collection-item">
      <div>
        {member.firstName} {member.lastName}
        <a href="#" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  deleteMember: PropTypes.func.isRequired,
};

export default connect(null, { deleteMember })(MemberItem);
