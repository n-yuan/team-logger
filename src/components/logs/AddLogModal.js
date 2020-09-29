import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../redux/actions/logActions";
import MemberSelectOptions from "../members/MemberSelectOptions";
import { setAlert } from "../../redux/actions/alertAction";

const AddLogModal = (props) => {
  const { className, setAlert } = props;

  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  const toggleLogModal = () => setModal(!modal);

  const onSubmit = () => {
    if (message === "" || member === "") {
      toggleLogModal();
      setAlert("Please enter logs and select members", "warning");
    } else {
      const newLog = {
        message,
        attention,
        member,
        date: new Date(),
      };
      props.addLog(newLog);
      toggleLogModal();
      //Clear Fields
      setMessage("");
      setMember("");
      setAttention(false);
    }
  };

  return (
    <div className="add-btn-container">
      <div className="add-log-btn-container">
        <button className="add-log-btn" onClick={toggleLogModal}>
          Add log
        </button>
      </div>

      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggleLogModal}
        className={className}
      >
        <ModalHeader toggle={toggleLogModal}>Enter Team Log</ModalHeader>
        <ModalBody>
          <div className="input-field-add-log">
            <textarea
              rows="4"
              type="text"
              name="message"
              value={message}
              placeholder="Add Log Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="input-field-select-member">
            <select
              name="member"
              value={member}
              className="browser-default"
              onChange={(e) => setMember(e.target.value)}
            >
              <option disabled value="">
                Select Member
              </option>
              <MemberSelectOptions />
            </select>
          </div>
          <div className="input-field-check-box">
            <input
              type="checkbox"
              className="filled-in"
              checked={attention}
              value={attention}
              onChange={(e) => setAttention(!attention)}
            />
            <div className="checkbox-caption">
              <span> Needs Attention</span>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="submit-btn" onClick={onSubmit}>
            Enter
          </button>{" "}
          <button className="cancel-add-btn" onClick={toggleLogModal}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog, setAlert })(AddLogModal);
