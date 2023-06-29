import React from "react";
import "./../styles/App.css";
import Modal from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Show Modal</button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default App;
