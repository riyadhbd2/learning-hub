// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBHZifUno9PGIEXc_RB-o9vl6Z-qV2eL4",
  authDomain: "lerning-hub.firebaseapp.com",
  projectId: "lerning-hub",
  storageBucket: "lerning-hub.appspot.com",
  messagingSenderId: "315693839622",
  appId: "1:315693839622:web:3ca51a487a1ed867805a87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;