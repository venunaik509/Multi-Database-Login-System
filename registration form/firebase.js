// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXI58ZMcj_k31rNy7upiA3mrOPauA1X-I",
  authDomain: "fir-project-3875f.firebaseapp.com",
  projectId: "fir-project-3875f",
  storageBucket: "fir-project-3875f.firebasestorage.app",
  messagingSenderId: "358453738529",
  appId: "1:358453738529:web:7c61e8ba6c856bd12e7760",
  measurementId: "G-ZBH7XLTBLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();