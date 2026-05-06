import "./Modal.css";

const Modal = ({ title, children }) => {
  return (
    <div className="modal">
      <div className="modal-backdrop">
        <div className="modal-content">
          <div className="modal-header">
            <h2>{title}</h2>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
