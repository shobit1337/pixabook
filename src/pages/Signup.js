import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Password dosent match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
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
        <h1>Sign Up</h1>
        {error && { error }}
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
          <div className="input-field">
            <input
              className="pswrd"
              type="password"
              ref={confirmPasswordRef}
              required
            />
            <span className="show" onClick={handleShow}>
              SHOW
            </span>
            <label>Confirm Password</label>
          </div>
          <div className="button">
            <div className="inner"></div>
            <button disabled={loading} type="submit">
              Register
            </button>
          </div>
        </form>
        <div className="auth">Or sign up with</div>
        <div className="links">
          <div className="google">
            <i className="fab fa-google-plus-square">
              <span>Google</span>
            </i>
          </div>
        </div>
        <div className="signup">
          Have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </motion.div>
  );
};
export default Signup;
