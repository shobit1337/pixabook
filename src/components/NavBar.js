import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    try {
      await logout();
      history.pushState("./login");
    } catch {
      console.log("error in logging out");
    }
  };
  return (
    <nav style={{ display: "flex", borderBottom: "1px solid #1da1f2" }}>
      <h1 style={{ minWidth: "90%" }}>PIXABOOK</h1>
      <div className="login-upload" style={{ textDecoration: "none" }}>
        {currentUser ? (
          <button onClick={handleLogout}>Log-out</button>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
