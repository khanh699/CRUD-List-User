import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow, users, setState, dataDelete } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitUpdateUser = () => {
    let listUser  = users.listUser;
    listUser = listUser.filter(item => item.id !== dataDelete.id)
    setState({listUser: listUser});
    toast.success(`User ${dataDelete.email} successfully removed`)
    handleClose()
  };

  return (
    <>
      <Modal className="modal-add-user" backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this user. email = <strong>{dataDelete && dataDelete.email ? dataDelete.email : ""}</strong></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
