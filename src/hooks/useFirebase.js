import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    //register system here
    const registerUser = (email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            })
            .finally(() => setLoading(false));
    }

    //Sign in with google 

    const signInWithGoogle = (history, location) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    //login system here
    const loginUser = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setLoading(false));
    }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);




    //logout system here
    const logout = () => {
        setLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setLoading(false));
    }

    return {
        user,
        registerUser,
        loginUser,
        loading,
        logout,
        signInWithGoogle
    }
};

export default useFirebase;