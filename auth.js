import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// REGISTER USER
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// LOGIN USER
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// LOGOUT USER
export function logoutUser() {
  return signOut(auth);
}
