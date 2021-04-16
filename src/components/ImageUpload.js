import React, { useState } from "react";
const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

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
    <form>
      <input type="file" onChange={uploadHandler} />;
      <div>
        {error && <div>{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default ImageUpload;