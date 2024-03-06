// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c1b69.firebaseapp.com",
  projectId: "mern-blog-c1b69",
  storageBucket: "mern-blog-c1b69.appspot.com",
  messagingSenderId: "93659294652",
  appId: "1:93659294652:web:923ae9b8d93e0b234359b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);