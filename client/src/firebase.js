// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realtor-2bd80.firebaseapp.com",
  projectId: "mern-realtor-2bd80",
  storageBucket: "mern-realtor-2bd80.appspot.com",
  messagingSenderId: "83698023079",
  appId: "1:83698023079:web:911eaacd4f2dacb4853982"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

