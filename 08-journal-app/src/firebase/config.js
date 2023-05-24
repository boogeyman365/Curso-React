// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmy9qx7sLYsmP4uLqOGzLqcXFv5AbzM64",
  authDomain: "curso-react-34805.firebaseapp.com",
  projectId: "curso-react-34805",
  storageBucket: "curso-react-34805.appspot.com",
  messagingSenderId: "424650880069",
  appId: "1:424650880069:web:5a380d88b88d6d9ffbdf2c"
};

// Initialize Firebase
export const firebaseApp  = initializeApp( firebaseConfig );
export const firebaseAuth = getAuth( firebaseApp );
export const firebaseDB   = getFirestore( firebaseApp );