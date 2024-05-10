import "../Styles/Modal.css"; // Optional: Import your CSS file for styling

// Modal Component
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null; // Return null if the modal is not open
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children} {/* Render dynamic content from children prop */}
      </div>
    </div>
  );
}

export default Modal;
