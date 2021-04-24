import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../form.css";
import { auth, serverFirestore } from "../firebase/config";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("Login sucess");
      history.push("/");
    } catch {
      setError("Wrong Password");
    }
    setLoading(false);
  };

  // const handleGoogle = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setError("");
  //     setLoading(true);
  //     await auth.signInWithPopup(new serverFirestore.auth.GoogleAuthProvider());
  //     console.log("Login sucess");
  //     history.push("/");
  //   } catch {
  //     setError("Failed to sign in");
  //   }
  //   setLoading(false);
  // };

  const handleDemo = (e) => {
    e.preventDefault();
    emailRef.current.value = "tminus5@test.com";
    passwordRef.current.value = "password";
  };

  const handleShow = (e) => {
    e.preventDefault();
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      e.target.style.color = "#1DA1F2";
      e.target.innerHTML = "HIDE";
    } else {
      passwordRef.current.type = "password";
      e.target.innerHTML = "SHOW";
      e.target.style.color = "#111";
    }
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container">
        <h1>Login Form</h1>
        {error}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" ref={emailRef} required />
            <label>Email</label>
          </div>
          <div className="input-field">
            <input
              className="pswrd"
              type="password"
              ref={passwordRef}
              required
            />
            <span className="show" onClick={handleShow}>
              SHOW
            </span>
            <label>Password</label>
          </div>
          <div className="button">
            <div className="inner"></div>
            <button disabled={loading} type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="signup">
          Forgot Password? <Link to="/reset-pass">Reset</Link>
        </div>
        <div className="auth">Or login with</div>
        <div className="links">
          <div onClick={handleDemo} className="facebook">
            <i className="fab fa-facebook-square">
              <span>DEMO</span>
            </i>
          </div>
          {/* <div onClick={handleGoogle} className="google">
            <i className="fab fa-google-plus-square">
              <span>Google</span>
            </i>
          </div> */}
        </div>
        <div className="signup">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
