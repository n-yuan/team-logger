import React, { useState } from "react";
import { connect } from "react-redux";
import { addMember } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";

const AddMemberModal = ({ addMember }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      console.log("Please enter the first and last name");
    } else {
      addMember({ firstName, lastName });

      //Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-member-modal" className="modal">
      <div className="modal-content">
        <h4>New Member</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddMemberModal.propTypes = {
  addMember: PropTypes.func.isRequired,
};
export default connect(null, { addMember })(AddMemberModal);
