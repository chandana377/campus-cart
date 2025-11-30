
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyCHejhJGn5FG-Cq0towJkhyv2BduzPjIAQ",
  authDomain: "campus-cart-943c1.firebaseapp.com",
  projectId: "campus-cart-943c1",
  storageBucket: "campus-cart-943c1.appspot.com",
  messagingSenderId: "276374239028",
  appId: "1:276374239028:web:92c76d2b0158d07a6c1761"
};

// INIT
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
