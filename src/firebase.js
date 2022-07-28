// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firebase-firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcRFXRC2X6CRYHtU8gz52wCzU3JzTIVc",
  authDomain: "linkedin-clone-15557.firebaseapp.com",
  projectId: "linkedin-clone-15557",
  storageBucket: "linkedin-clone-15557.appspot.com",
  messagingSenderId: "242635673736",
  appId: "1:242635673736:web:dd2b4561d5af1fcc8d4f3d"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;