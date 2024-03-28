// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbx1lbc5jBPcGGzhy_9tnbHEn1II4CojI",
  authDomain: "react-disney-plus-45f83.firebaseapp.com",
  projectId: "react-disney-plus-45f83",
  storageBucket: "react-disney-plus-45f83.appspot.com",
  messagingSenderId: "402934188032",
  appId: "1:402934188032:web:5ac849ef49ff1063d570e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
