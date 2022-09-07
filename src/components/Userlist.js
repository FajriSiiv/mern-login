import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUsers = async (userId) => {
    await axios
      .delete(`http://localhost:5000/users/${userId}`)
      .then((data) => setMessage(data.data.msg))
      .catch((err) => setMessage(err.response.data.msg));
    getUsers();
  };

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List Users</h2>
      <Link className="button is-primary mb-2" to={"/users/add"}>
        Tambah User
      </Link>
      <p>{message}</p>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user.uuid}>
              <td> {i + 1} </td>
              <td> {user.name} </td>
              <td> {user.email} </td>
              <td> {user.role}</td>
              <td>
                {" "}
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUsers(user.uuid)}
                  className="button  is-small is-danger ml-2"
                >
                  Hapus
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
