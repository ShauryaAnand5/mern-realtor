// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realtor-a2845.firebaseapp.com",
  projectId: "mern-realtor-a2845",
  storageBucket: "mern-realtor-a2845.appspot.com",
  messagingSenderId: "935857891983",
  appId: "1:935857891983:web:8be14413d3c5f761ad1efa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);