// --- Firebase Core Imports ---
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// --- Firebase AUTH ---
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- Firebase FIRESTORE ---
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// --- Your Firebase Config ---
const firebaseConfig = {
  apiKey: "AIzaSyCHejhJGn5FG-Cq0towJkhyv2BduzPjIAQ",
  authDomain: "campus-cart-943c1.firebaseapp.com",
  projectId: "campus-cart-943c1",
  storageBucket: "campus-cart-943c1.firebasestorage.app",
  messagingSenderId: "276374239028",
  appId: "1:276374239028:web:92c76d2b0158d07a6c1761"
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);

// Export Firebase services so other .js files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
