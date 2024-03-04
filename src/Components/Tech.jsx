import { useEffect, useState } from "react";
import UserData from "./UserData";
const API = "https://jsonplaceholder.typicode.com/users";

function Tech() {
  const [users, setUsers] = useState([]);

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
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  };

  return (
    <>
      <header className="tech-head">
        Welcome to Tech Supoort
        <button onClick={logout} className="logout">
          Logout
        </button>
      </header>

      <section className="tech-data admin-info">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Error Message</th>
              <th>Response</th>
              <th>Mark Close and Resolve</th>
            </tr>
          </thead>
          <tbody>
            <UserData users={users} />
          </tbody>
        </table>
      </section>
    </>
  );
}
export default Tech;
