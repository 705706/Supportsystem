import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <h1>Welcome to Tech-Support</h1>
      <div>
        <h1>
          <Link to="/Login" className="homea">
            Login
          </Link>
        </h1>
        <br />
        <h1>
          <Link to="/Signup" className="homea">
            Signup
          </Link>
        </h1>
      </div>
      <footer>@copy 2024 Suraj Kadukar</footer>
    </div>
  );
}

export default Home;
