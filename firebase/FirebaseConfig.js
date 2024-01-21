// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc_HTVvA3kVy1VlhQNSUSuiK2hliLqhI8",
  authDomain: "nike-877cc.firebaseapp.com",
  projectId: "nike-877cc",
  storageBucket: "nike-877cc.appspot.com",
  messagingSenderId: "1022720101419",
  appId: "1:1022720101419:web:ccc8eeee23e246ecb96e6e",
  measurementId: "G-MF6M3DEPX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);