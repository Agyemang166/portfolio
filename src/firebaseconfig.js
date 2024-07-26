// src/firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyAupeccvZ1dPv_kJaZIXCpcLBPZKv58Gp4",
  authDomain: "portfolio-8fd04.firebaseapp.com",
  projectId: "portfolio-8fd04",
  storageBucket: "portfolio-8fd04.appspot.com",
  messagingSenderId: "700940673803",
  appId: "1:700940673803:web:acc0db0a513ea04956780e",
  measurementId: "G-MCG4L1NJ9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db }; // Export Firestore
