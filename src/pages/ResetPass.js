import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ResetPass = () => {
  const emailRef = useRef();
  const { resetPass } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPass(emailRef.current.value);
      setMessage("Check your inbox for futher instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container">
        <h1>Login Form</h1>
        {message && { message }}
        {error && { error }}
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" ref={emailRef} required />
            <label>Email</label>
          </div>
          <div className="button">
            <div className="inner"></div>
            <button disabled={loading} type="submit">
              Reset
            </button>
          </div>
        </form>
        <Link to="/login">
          <div className="links">
            <div className="google">
              <i className="fab fa-google-plus-square">
                <span>Cancel</span>
              </i>
            </div>
          </div>
        </Link>
        <div className="signup">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </motion.div>
  );
};
export default ResetPass;
