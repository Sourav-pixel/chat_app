// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGjhCbP2MTWzrnzWd3Ae4gJeIIlr_FUgo",
  authDomain: "chat-room-sd.firebaseapp.com",
  projectId: "chat-room-sd",
  storageBucket: "chat-room-sd.appspot.com",
  messagingSenderId: "194929075657",
  appId: "1:194929075657:web:cd459d163d21aaaad5f418",
  measurementId: "G-YK1JDPPYQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)