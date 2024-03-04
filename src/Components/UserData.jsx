import { useState } from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((currUser) => {
        const { id, name, email, company } = currUser;
        const [checked, setChecked] = useState(false);

        return (
          <tr key={id} className={`row ${checked ? "highlighted" : ""}`}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{company.catchPhrase}</td>
            <td>
              <select name="tech" id="">
                Tech
                <option value="1">Tech Support</option>
                <option value="1">Tech Support 1</option>
                <option value="1">Tech Support 2</option>
                <option value="1">Tech Support 3</option>
                <option value="1">Tech Support 4</option>
              </select>
              <tr>
                <input type="text" />
                <button className="btn1">Submit</button>
              </tr>
            </td>
            <td>
              <tr>
                <input
                  type="checkbox"
                  name="option1"
                  id=""
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              </tr>
              <tr>
                <button className="btn">Resolve</button>
              </tr>
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
