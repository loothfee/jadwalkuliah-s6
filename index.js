// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgmruuow3Bt4cDtDpPLTCGW13AoIklP-k",
  authDomain: "jadwal-kuliah-19-if-b.firebaseapp.com",
  projectId: "jadwal-kuliah-19-if-b",
  storageBucket: "jadwal-kuliah-19-if-b.appspot.com",
  messagingSenderId: "489890655382",
  appId: "1:489890655382:web:4402d83f3820ab719be6b7",
  measurementId: "G-2Z1MHYMY9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);