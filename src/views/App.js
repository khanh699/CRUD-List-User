import logo from '../logo.svg';
import './App.scss';
import PerfectScrollbar from "react-perfect-scrollbar";
import { useState } from "react";
import { FcPlus } from "react-icons/fc";
import { ToastContainer } from 'react-toastify';
import ListUser from '../components/content/ListUser';
import ModalCreateUser from '../components/content/ModalCreateUser';
import ModalUpdateUser from '../components/content/ModalUpdateUser';
import ModalDeleteUser from '../components/content/ModalDeleteUser';

const App = () => {
  const [state, setState] = useState({
    listUser: [
      {id: 'user1', email: 'khanh99@gmail.com', name: 'Khanh'},
      {id: 'user2', email: 'nam96@gmail.com', name: 'Nam'},
      {id: 'user3', email: 'pig95kt@gmail.com', name: 'Pig'}
    ]
  })

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  const AddNewUser = (user) => {
    setState({listUser: [...state.listUser, user]});
  }

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user)
  }

  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user)
  }
  
  return (
    <>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Khanh</h1>
        </div>
        <div className="main-container">
          <PerfectScrollbar>
            <div className="App-content">
                <button className="btn btn-secondary" onClick={() => setShowModalCreateUser(true)}>
                  <FcPlus /> Add new users
                </button>
                <ListUser users={state} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnDelete={handleClickBtnDelete} />
            </div>
          </PerfectScrollbar>
        </div>
        <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} AddNewUser={AddNewUser} />
        <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} users={state} setState={setState} dataUpdate={dataUpdate} handleClickBtnUpdate={handleClickBtnUpdate} />
        <ModalDeleteUser show={showModalDeleteUser} setShow={setShowModalDeleteUser} users={state} setState={setState} dataDelete={dataDelete} handleClickBtnDelete={handleClickBtnDelete} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
