import { useState } from "react";
import Modal from "./ChildrenModal";
function ParentModal() {
  const [isModalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="parent-container">
      <button onClick={openModal} className="open-modal">
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Dynamic Content</h2>
        <p>
          This is the dynamic content inside the modal! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Inventore architecto consequuntur
          voluptatem mollitia ea! Facilis reiciendis natus amet consequatur,
          voluptate error cum repellendus! Blanditiis beatae nihil magni, cum
          doloremque omnis. Lorem, ipsum dolor si
        </p>
        {/* You can pass any other components or elements as children */}
      </Modal>
    </div>
  );
}

export default ParentModal;
