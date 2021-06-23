import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const { push } = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      useHistory.pushState("./login");
    } catch {
      console.log("error in logging out");
    }
  };
  return (
    <nav className="nav-bar">
      <h1>PIXABOOK</h1>
      {/* <div className="login-upload" style={{ textDecoration: "none" }}> */}

      {currentUser ? (
        <button className="btn nav-link" onClick={handleLogout}>
          Log-out
        </button>
      ) : (
        <button className="btn nav-link" onClick={() => push("./login")}>
          Login
        </button>
      )}

      {/* </div> */}
    </nav>
  );
};
export default NavBar;
