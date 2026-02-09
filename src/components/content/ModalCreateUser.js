import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const ModalCreateUser = (props) => {
  const { show, setShow, AddNewUser } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setName("");
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleSubmitCreateUser = () => {
    const isvalidEmail = validateEmail(email);

    if (!isvalidEmail) {
      toast.error("Invalid Email");
      return;
    }

    if (!name) {
      toast.error("Invalid name");
      return;
    }

    let data = {
      id: Math.floor(Math.random() * 10),
      email: email,
      name: name
    };

    AddNewUser(data)
    toast.success("User added successfully")
    handleClose();
  };

  return (
    <>
      <Modal className="modal-add-user" backdrop="static" size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
