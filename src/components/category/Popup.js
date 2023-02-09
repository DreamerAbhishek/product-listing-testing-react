import { Button, Modal } from "react-bootstrap";

const Popup = ({ show, handleClose, currentCategory }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentCategory ? (
          <div>
            <div>
              <label>
                <strong>ID:</strong>
              </label>
              {currentCategory.id}
            </div>
            <div>
              <label>
                <strong>Name:</strong>
              </label>
              {currentCategory.name}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>
              {currentCategory.description}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a category...</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
