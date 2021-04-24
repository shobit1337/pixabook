import { useState, useEffect } from "react";
import { serverStorage, serverFirestore, timestamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = serverStorage.ref(file.name);
    const collectionRef = serverFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let uploadPercentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(uploadPercentage);
      },
      (err) => {
        console.log("Error in putting file abd percentage.");
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};
export default useStorage;
