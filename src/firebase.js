
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwdOkbcBlbHCF3r5HKjBCkLE91UglBJOg",
  authDomain: "fir-auth-56bb2.firebaseapp.com",
  projectId: "fir-auth-56bb2",
  storageBucket: "fir-auth-56bb2.appspot.com",
  messagingSenderId: "989536641353",
  appId: "1:989536641353:web:2e55e6e8521fc385cbba98",
  measurementId: "G-37K6Y6S0RH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};
