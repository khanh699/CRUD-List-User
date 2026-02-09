import './ListUser.scss';

const ListUser = (props) => {
  const { users } = props;

  // console.log("list user:", users.listUser)

  return (
    <>
      <h2>List User</h2>
      <table className="table table-hover table-bordered m-0">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.listUser && users.listUser.length && users.listUser.map((item, index) => {
            return(
              <tr key={`table-users-${item.id}`}>
                {/* <td>{item.id}</td> */}
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>
                  <button className="btn btn-warning me-3" onClick={() => props.handleClickBtnUpdate(item)}>Update</button> 
                  <button className="btn btn-danger" onClick={() => props.handleClickBtnDelete(item)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListUser;