// Import the functions you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config (paste your personal values)
const firebaseConfig = {
  apiKey: "AIzaSyCHejhJGn5FG-Cq0towJkhyv2BduzPjIAQ",
  authDomain: "campus-cart-943c1.firebaseapp.com",
  projectId: "campus-cart-943c1",
  storageBucket: "campus-cart-943c1.firebasestorage.app",
  messagingSenderId: "276374239028",
  appId: "1:276374239028:web:92c76d2b0158d07a6c1761",
  measurementId: "G-LCSRTW0SC0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
