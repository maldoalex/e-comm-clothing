import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDAG_kGSSDjYSp90A-H7n0x9UXgY1wmDFw",
  authDomain: "e-comm-clothing.firebaseapp.com",
  databaseURL: "https://e-comm-clothing.firebaseio.com",
  projectId: "e-comm-clothing",
  storageBucket: "",
  messagingSenderId: "1010330443253",
  appId: "1:1010330443253:web:4b11b6202b6fd515ae54bc",
  measurementId: "G-K07D2VHS2R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
