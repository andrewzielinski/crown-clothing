import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCQZqy_8X5vrPJpT5PudGioqqI-19PfK_g",
  authDomain: "crwn-db-af1d6.firebaseapp.com",
  databaseURL: "https://crwn-db-af1d6.firebaseio.com",
  projectId: "crwn-db-af1d6",
  storageBucket: "crwn-db-af1d6.appspot.com",
  messagingSenderId: "438533453468",
  appId: "1:438533453468:web:d728091b6ecd1b3a9a9f59",
  measurementId: "G-4CYTTR5JVF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;