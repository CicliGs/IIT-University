import { useEffect, useState } from "react";
import api from "../../http";
import "./Users.css";
import AdminService from "../../services/AdminService";

const Users = () => {
  const [isViewUsers, setIsViewUsers] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortedBy, setSortedBy] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    (async () => {
      const response = await AdminService.getAllUsers();
      setUsers(response.data);
      setFilteredUsers(response.data);
    })();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((users) => {
        return users.username.toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [filter]);

  return (
    <>
      <div className="main">
        <input
          type="text"
          value={filter}
          placeholder="Введите фильтр"
          onChange={(e) => setFilter(e.target.value)}
        />

        <table className="table-sortable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers
              .sort((a, b) => {
                //return a.username.localeCompare(b.username);
                //return a.role.localeCompare(b.role);
                return b.id - a.id;
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
