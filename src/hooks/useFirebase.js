import { useState, useEffect } from "react";
import serverStorage from "../firebase/config";

const useFirebase = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = serverStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let uploadPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(uploadPercentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
export default useFirebase;
