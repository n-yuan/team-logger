import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Toast,
  ToastHeader,
} from "reactstrap";
import MemberSelectOptions from "../members/MemberSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateLog, clearCurrent } from "../../redux/actions/logActions";

const EditLogModal = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    if (modal) {
      clearCurrent();
    }
    setModal(!modal);
  };
  const toggleEditLog = () => setShow(!show);
  const { current, updateLog, clearCurrent } = props;
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  useEffect(() => {
    if (current) {
      setModal(!modal);
      setMessage(current.message);
      setAttention(current.attention);
      setMember(current.member);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || member === "") {
      toggleEditLog();
      toggle();
    } else {
      const updLog = {
        _id: current._id,
        message,
        attention,
        member,
        date: new Date(),
      };

      updateLog(updLog);
      toggle();

      //Clear Fields
      setMessage("");
      setMember("");
      setAttention(false);
    }
  };

  return (
    <div className="add-btn-container">
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
          <button className="cancel-add-btn" onClick={toggle}>
            Cancel
          </button>
        </ModalFooter>
      </Modal>

      <div>
        <Toast isOpen={show} className="toast">
          <ToastHeader toggle={toggleEditLog}>
            <i class="fas fa-exclamation-circle"></i> Please enter a message and
            member.
          </ToastHeader>
        </Toast>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});
EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};
export default connect(mapStateToProps, { updateLog, clearCurrent })(
  EditLogModal
);
