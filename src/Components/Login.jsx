import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import InputControl from "../Components/inputControl";
import { auth } from "../firebase";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleAdmin = () => {
    if (values.email === "admin@email.com" && values.pass === "admin") {
      console.log("Login success");
      navigate("/Adminpage");
    } else {
      setErrorMsg("Invalid Credientials");
    }
  };

  const handleTech = () => {
    if (values.email === "tech@email.com" && values.pass === "tech") {
      console.log("Login success");
      navigate("/Tech");
    } else {
      setErrorMsg("Invalid Credientials");
    }
  };

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/Dashboard");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>
            Login
          </button>
          <button disabled={submitButtonDisabled} onClick={handleTech}>
            Tech Support
          </button>
          <button disabled={submitButtonDisabled} onClick={handleAdmin}>
            Admin
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/Signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
