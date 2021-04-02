import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLogin = () => {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
}

// google sign in
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: true
            }
            return signedInUser;

        }).catch(err => {
            console.log("error: ", err.message);
        })
}

// google sign out
export const handleGoogleSignOut = () => {
    return firebase.auth().signOut().then(() => {
        const userOut = {
            isSignedIn: false,
            name: "",
            email: "",
            photoURL: ""
        }
        return userOut;
    }).catch(err => {
        console.log(err);
    });
}
