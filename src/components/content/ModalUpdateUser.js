import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, setShow, users, setState, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
    setName(dataUpdate.name);
  };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      //Update state
      setEmail(dataUpdate.email);
      setName(dataUpdate.name);
    }
  }, [dataUpdate]);

  const handleSubmitUpdateUser = () => {
    let listUser  = users.listUser;
    let opjIndex = listUser.findIndex(item => item.id === dataUpdate.id)
    listUser[opjIndex].name = name

    setState({listUser: listUser});
    toast.success(`User update successful`)
    handleClose();
  };

  return (
    <>
      <Modal className="modal-add-user" backdrop="static" size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" value={email} disabled onChange={(event) => setEmail(event.target.value)} />
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
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
