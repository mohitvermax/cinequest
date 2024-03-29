// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoo4MSaEui7im3qocWgdJQKIVz-hgTEmg",
  authDomain: "cinequest-32efb.firebaseapp.com",
  projectId: "cinequest-32efb",
  storageBucket: "cinequest-32efb.appspot.com",
  messagingSenderId: "828240883256",
  appId: "1:828240883256:web:6b29e3993af5ac724300cd",
  measurementId: "G-TZM9SRVS6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);