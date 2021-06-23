import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const ImageUpload = ({ currentUser }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const { push } = useHistory();

  const allowedTypes = ["image/png", "image/jpeg"];

  const uploadHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image files (png/jpeg)");
    }
  };

  return (
    <form className="upload-form">
      {currentUser ? (
        <label className="upload-label">
          <input type="file" onChange={uploadHandler} />
          <span>+</span>
        </label>
      ) : (
        <button className="btn login-btn" onClick={() => push("./login")}>
          Login to upload
        </button>
      )}
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default ImageUpload;
