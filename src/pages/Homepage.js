import React, { useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import ImageUpload from "../components/ImageUpload";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Homepage = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <NavBar />
      {currentUser ? (
        <ImageUpload />
      ) : (
        <Link
          to="/login"
          style={{
            display: "inline-block",
            alignItems: "center",
            textAlign: "center",
            border: "2px solid #1da1f2",
            backgroundColor: "#fff",
            margin: "10px auto",
            padding: "1.1rem",
            textDecoration: "none",
          }}
        >
          Login to upload
        </Link>
      )}
      <ImageDisplay setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Homepage;
