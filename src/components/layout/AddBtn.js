import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../redux/actions/logActions";
import MemberSelectOptions from "../members/MemberSelectOptions";

const AddBtn = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  const onSubmit = () => {
    if (message === "" || member === "") {
      console.log("please enter message");
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
        <ModalHeader toggle={toggle}>Enter Team Log</ModalHeader>
        <ModalBody>
          <div className="input-field-add-log">
            <input
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
            <span> Needs Attention</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>
            Enter
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

AddBtn.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddBtn);
