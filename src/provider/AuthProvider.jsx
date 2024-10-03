import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const axiosPublic = useAxiosPublic();

  // user creation
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user login
  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  // REAUTHETICATION THE USER PASSWORD
  const reAuthenticateUser = (currentPassword) => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return reauthenticateWithCredential(user, credential);
  };

  // UPDATE USERS PASSWORD
  const updateUserPassword = async (currentPassword, newPassowrd) => {
    setLoader(true);
    try {
      await reAuthenticateUser(currentPassword);
      await updatePassword(auth.currentPassword, newPassowrd);
      setLoader(true);
      return { success: true };
    } catch (error) {
      setLoader(false);
      return { success: false, error: error.message };
    }
  };

  // logout
  const logout = () => {
    setLoader(true);
    return signOut(auth);
  };

  // state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };

        axiosPublic.post("/authorization/jwt", userInfo).then((res) => {
          if (res.data.token) {
            console.log(res.data.token);
            localStorage.setItem("accessToken", res.data.token.accessToken);
            setLoader(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoader(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    logout,
    loginWithGoogle,
    userLogin,
    updateUserProfile,
    createUser,
    setImagePreview,
    imagePreview,
    updateUserPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
