// auth.js
import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  setDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// REGISTER USER
export async function registerUser(email, password, username) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const uid = res.user.uid;

    await setDoc(doc(db, "users", uid), {
      username,
      email,
      createdAt: Date.now()
    });

    localStorage.setItem("user", uid);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

// LOGIN USER
export async function loginUser(email, password) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", res.user.uid);
    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
}

// LOGOUT
export async function logout() {
  await signOut(auth);
  localStorage.removeItem("user");
}
