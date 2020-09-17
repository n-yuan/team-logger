import React, { useState, useEffect } from "react";
import MemberSelectOptions from "../members/MemberSelectOptions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../actions/logActions";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setMember(current.member);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || member === "") {
      M.toast({ html: "Please enter a message and member" });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        member,
        date: new Date(),
      };

      updateLog(updLog);
      M.toast({ html: `Log updated by ${member}` });

      //Clear Fields
      setMessage("");
      setMember("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Team Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
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
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};
const mapStateToProps = (state) => ({
  current: state.log.current,
});
EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};
export default connect(mapStateToProps, { updateLog })(EditLogModal);
