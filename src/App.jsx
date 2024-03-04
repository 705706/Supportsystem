import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components//Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

import { auth } from "./firebase";

import "./App.css";
import Dashboard from "./Components/Dashboard";
import Tech from "./Components/Tech";
import Adminpage from "./Components/Adminpage";

function App() {

  
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard name={userName} />} />
          <Route path="/Tech" element={<Tech />} />
          <Route path="/Adminpage" element={<Adminpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;