import { Button, Modal } from "react-bootstrap";

const Popup = ({ show, handleClose, currentProduct }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentProduct ? (
          <div>
            <div>
              <label>
                <strong>ID:</strong>
              </label>
              {currentProduct.id}
            </div>

            <div>
              <label>
                <strong>Category Id:</strong>
              </label>
              {currentProduct.categoryid}
            </div>

            <div>
              <label>
                <strong>Name:</strong>
              </label>
              {currentProduct.title}
            </div>

            <div>
              <label>
                <strong>Description:</strong>
              </label>
              {currentProduct.description}
            </div>

            <div>
              <label>
                <strong>Proce:</strong>
              </label>
              {currentProduct.price + " " + currentProduct.currency}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a product...</p>
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
