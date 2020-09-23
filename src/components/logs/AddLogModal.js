import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../redux/actions/logActions";
import MemberSelectOptions from "../members/MemberSelectOptions";

const AddBtn = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleLog = () => setShow(!show);
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  const onSubmit = () => {
    if (message === "" || member === "") {
      toggle();
      toggleLog();
    } else {
      const newLog = {
        message,
        attention,
        member,
        date: new Date(),
      };
      props.addLog(newLog);
      toggle();
      //Clear Fields
      setMessage("");
      setMember("");
      setAttention(false);
    }
  };

  return (
    <div className="add-btn-container">
      <div className="add-log-btn-container">
        <button className="add-log-btn" onClick={toggle}>
          {buttonLabel}Add log
        </button>
      </div>
      
        <Modal
          isOpen={modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={toggle}
          className={className}
        >
          <ModalHeader toggle={toggle} >Enter Team Log</ModalHeader>
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
            <button className="submit-log-btn" onClick={onSubmit}>
              Enter
            </button>{" "}
            <button className="cancel-add-log-btn" onClick={toggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
     
      <div>
        <Toast isOpen={show} className="toast">
          <ToastHeader toggle={toggleLog}>
            <i class="fas fa-exclamation-circle"></i> Please enter logs.
          </ToastHeader>
        </Toast>
      </div>
    </div>
  );
};

AddBtn.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddBtn);
