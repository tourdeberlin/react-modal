import { useState } from "react";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        title="Подтверждение действия"
      >
        <p>Вы уверены, что хотите удалить файл?</p>
        <button>Да</button>
        <button>Нет</button>
      </Modal>
    </>
  );
}

export default App;
