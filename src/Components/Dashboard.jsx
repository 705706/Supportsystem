import { useState } from "react";

function Dashboard({ name }) {
  const API = "https://jsonplaceholder.typicode.com/users";

  const [formInputData, setFormInputData] = useState([]);
  

  const [desc, Setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { desc };
    setFormInputData([...formInputData, newData]);
    Setdesc("");
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  };
  return (
    <>
      <header className="dash-header">
        <span className="welcomemessage">Welcome to DashBoard {name}</span>
        <button onClick={logout}>Logout</button>
      </header>
      <section className="dash-sec">
        <h2>Ticket</h2>
        <form action="">
          <label htmlFor="">Add Description:</label>
          <br />
          <textarea
            name=""
            id=""
            cols="40"
            rows="8"
            value={desc}
            onChange={(e) => Setdesc(e.target.value)}
          ></textarea>
          <br />
          <label htmlFor="">Upload a File: </label>
          <br />
          <input type="file" />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </section>

      <div className="table">
        <table className="tabledata">
          <thead>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {formInputData.map((item, index) => (
              <tr key={index}>
                <td>{item.desc}</td>
                <td>
                  <button>Mark Close</button>
                </td>
                <td>
                  <button>Mark Resolved</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Dashboard;
