import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [member, setMember] = useState("");

  const onSubmit = () => {
    if (message == "" || member == "") {
      M.toast({ html: "Please enter a message and member" });
    } else {
      console.log(message, member, attention);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter Team Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="member"
              value={member}
              className="browser-default"
              onChange={e => setMember(e.target.value)}
            >
              <option disabled value="">
                Select Member
              </option>
              <option value="Yiping Niu">Yiping Niu</option>
              <option value="Nan Yuan">Nan Yuan</option>
              <option value="Ryan Niu">Ryan Niu</option>
              <option value="Arissa Yuan">Arissa Yuan</option>
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
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddLogModal;
