import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
// const serverUrl = "http://localhost:3000";
const serverUrl = "https://booknest-lime.vercel.app";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [dbUserInfo, setDbUserInfo] = useState(null);

  useEffect(() => {
    const fetchDbUserInfo = async () => {
      if (user?.email) {
        try {
          const res = await axios(`${serverUrl}/users/${user.email}`);
          setDbUserInfo(res.data);
          // console.log("Fetched dbUserInfo:", res.data);
        } catch (error) {
          console.error("Failed to fetch user info:", error);
        }
      }
    };

    fetchDbUserInfo();
  }, [user]);

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setLoading(false);
      setUser(currenUser);
    //   console.log("logged in user", currenUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    signUpWithEmail,
    logOut,
    signInWithEmail,
    signInWithGoogle,
    serverUrl,
    dbUserInfo,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
