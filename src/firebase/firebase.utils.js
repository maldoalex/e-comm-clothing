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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
