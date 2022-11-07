// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwQWE2vgw_FaakMocMiw8UG-qqK4wcYVg",
  authDomain: "chat-7c7ca.firebaseapp.com",
  projectId: "chat-7c7ca",
  storageBucket: "chat-7c7ca.appspot.com",
  messagingSenderId: "36300122338",
  appId: "1:36300122338:web:955eaa3344127966fc56bb",
  measurementId: "G-8N08L98KJ0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()