// firebase.js
// IMPORTANT: Replace the firebaseConfig object values with YOUR Firebase project's values.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8DKXp5rKc7lQ5WWIcfrbO9I45A1rZWuY",
  authDomain: "campus-cart-7f6fd.firebaseapp.com",
  projectId: "campus-cart-7f6fd",
  storageBucket: "campus-cart-7f6fd.firebasestorage.app",
  messagingSenderId: "827474303498",
  appId: "1:827474303498:web:a09bb02ae865bb2fe3ddf3",
  measurementId: "G-YBQ6XW9E69"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
