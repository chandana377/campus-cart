// Firebase SDK (Modular) - Compatible with GitHub Pages

// Load Firebase SDKs from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your Firebase configuration
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
export const storage = getStorage(app);
