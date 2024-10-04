import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user login
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    // state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };

                axiosPublic.post('/authorization/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('accessToken', res.data.token.accessToken);
                            setLoader(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token');
                setLoader(false)
            }
        })
        return () => {
            unsubscribe()
        }
    }, [axiosPublic])


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
        imagePreview
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;