// lib/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfMvzeRVGdHmg0w7Bd6604DeLcDjkw1GQ",
  authDomain: "nextexpoapp-57b0f.firebaseapp.com",
  projectId: "nextexpoapp-57b0f",
  storageBucket: "nextexpoapp-57b0f.firebasestorage.app",
  messagingSenderId: "360876365561",
  appId: "1:360876365561:web:a38b4b6492ae026fdcf428",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, createUserWithEmailAndPassword };
