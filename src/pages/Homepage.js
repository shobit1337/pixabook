import React, { useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import ImageUpload from "../components/ImageUpload";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Homepage = () => {
  const { currentUser } = useAuth();

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <NavBar />
      <ImageUpload currentUser={currentUser} />
      <ImageDisplay setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default Homepage;
