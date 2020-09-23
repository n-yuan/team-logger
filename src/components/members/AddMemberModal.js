import React, { useState } from "react";
import { connect } from "react-redux";
import { addMember } from "../../redux/actions/memberActions";
import PropTypes from "prop-types";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
} from "reactstrap";

const AddMemberModal = (props) => {
  const { className, addMember } = props;
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleMember = () => setShow(!show);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      console.log("Please enter the first and last name");
      toggle();
    } else {
      addMember({ firstName, lastName, title, email, phone });
      toggle();
      //Clear Fields
      setFirstName("");
      setLastName("");
      setTitle("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="add-member-btn-container">
      <div className="add-member-btn-container">
        <button className="add-member-btn" onClick={toggle}>
          Add member
        </button>
      </div>

      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle}>Enter member</ModalHeader>
        <ModalBody>
          <div className="input-field-add-member-firstname">
            <input
              type="text"
              name="firstname"
              value={firstName}
              placeholder="Add firstname"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-field-add-member-lastname">
            <input
              type="text"
              name="lastname"
              value={lastName}
              placeholder="Add lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-field-add-member-title">
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Add title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-field-add-member-email">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Add email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field-add-member-phone">
            <input
              type="text"
              name="phone"
              value={phone}
              placeholder="Add phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="submit-btn" onClick={onSubmit}>
            Enter
          </button>{" "}
          <button className="cancel-add-btn" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <div>
        <Toast isOpen={show}>
          <ToastHeader toggle={toggleMember}>
            <i class="fas fa-exclamation-circle"></i> Please enter logs and
            select members.
          </ToastHeader>
        </Toast>
      </div>
    </div>
  );
};

AddMemberModal.propTypes = {
  addMember: PropTypes.func.isRequired,
};
export default connect(null, { addMember })(AddMemberModal);
