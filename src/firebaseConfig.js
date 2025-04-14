// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmIJXJdx09i71As3vINiP6gamrlJbK2Bw",
  authDomain: "redesociales-e7b84.firebaseapp.com",
  projectId: "redesociales-e7b84",
  storageBucket: "redesociales-e7b84.firebasestorage.app",
  messagingSenderId: "790963151097",
  appId: "1:790963151097:web:e5c91633539eb7a8fa8228",
  measurementId: "G-SRTFVTRP96",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
