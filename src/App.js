import React, { useState } from "react";
import ImageDisplay from "./components/ImageDisplay";
import ImageUpload from "./components/ImageUpload";
import Modal from "./components/Modal";

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <h1>PIXABOOK</h1>
      <ImageUpload />
      <ImageDisplay setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default App;
