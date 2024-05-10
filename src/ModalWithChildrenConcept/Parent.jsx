import { useState } from "react";
import ModalChildren from "./ModalChildren";

function Parent() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <div className="parent-container">
      <button onClick={handleOpenModal}>Open Modal</button>
      <ModalChildren isOpen={isOpenModal} isClose={handleCloseModal}>
        <h2>Dynamic Content</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
          tempora. Omnis blanditiis distinctio reiciendis vel delectus amet,
          eveniet, corporis enim accusamus laborum adipisci fugiat molestias
          culpa quibusdam illum natus facere. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </ModalChildren>
    </div>
  );
}

export default Parent;
