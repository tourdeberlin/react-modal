import "./App.css";
import Modal from "./Modal/Modal";

function App() {
  return (
    <>
      <Modal title="Подтверждение действия">
        <p>Вы уверены, что хотите удалить файл?</p>
        <button>Да</button>
        <button>Нет</button>
      </Modal>
    </>
  );
}

export default App;
