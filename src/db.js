import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPWKl5p6r0vKHco3d93otmwpthySR3lAc",
  authDomain: "covidinfo-e6b30.firebaseapp.com",
  databaseURL: "https://covidinfo-e6b30.firebaseio.com",
  projectId: "covidinfo-e6b30",
  storageBucket: "covidinfo-e6b30.appspot.com",
  messagingSenderId: "1009199216327",
  appId: "1:1009199216327:web:692865896032cc0c9430e2",
  measurementId: "G-XLMPNQV0LN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
