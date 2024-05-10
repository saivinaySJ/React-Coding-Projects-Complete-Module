import React from "react";
import "../Styles/Modal.css";
function ModalChildren({ isOpen, isClose, children }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={isClose} className="close-button">
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}

export default ModalChildren;
