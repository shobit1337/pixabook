import { useState, useEffect } from "react";
import { serverFirestore } from "../firebase/config";
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = serverFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let document = [];
        snap.forEach((doc) => {
          document.push({ ...doc.data(), id: doc.id });
        });
        setDocs(document);
      });
    return () => unsub;
  }, [collection]);

  return { docs };
};
export default useFirestore;
