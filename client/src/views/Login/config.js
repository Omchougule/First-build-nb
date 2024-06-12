// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASiSSlXvEZukvcKU-6Tey8uuEDeJTAaos",
  authDomain: "nutribites-2fb38.firebaseapp.com",
  projectId: "nutribites-2fb38",
  storageBucket: "nutribites-2fb38.appspot.com",
  messagingSenderId: "978751761971",
  appId: "1:978751761971:web:e02fd3932ebe69a1aefd46",
  measurementId: "G-W8PSPZQVBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export {auth , provider};