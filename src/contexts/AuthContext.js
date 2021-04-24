import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase/config";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  // const sighInWithGoogle = () => {
  //   return auth.signInWithPopup(new serverFirestore.auth.GoogleAuthProvider());
  // };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };
  const resetPass = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePass = (newPassword) => {
    return currentUser.updatePassword(newPassword);
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPass,
    updateEmail,
    updatePass,
    //sighInWithGoogle,
    //checkCurrentPass,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { useAuth };

export default AuthProvider;
