import { useEffect, useState } from "react";
import UserData from "./UserData";
const API = "https://jsonplaceholder.typicode.com/users";
import { CiLogout } from "react-icons/ci";

function Adminpage() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  };

  const [users, setUsers] = useState([]);
  const [checked, setChecked] = useState(false);

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);
  return (
    <>
      <header className="admin-head">
        Welcome to Admin Page{" "}
        <button className="logout" onClick={logout}>
          Logout
          <CiLogout />
        </button>
      </header>
      <section className="admin-info">
        <h2>Assign Task</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Error Message</th>
              <th>Assign / Change</th>
              <th>Mark Close and Resolve</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </section>

      <main></main>
    </>
  );
}
export default Adminpage;
