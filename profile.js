// profile.js
import { db } from "./firebase-config.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadProfile() {
  const uid = localStorage.getItem("user");
  if (!uid) {
    document.getElementById("profile-info").innerHTML = "Not logged in.";
    return;
  }

  const snap = await getDoc(doc(db, "users", uid));

  if (!snap.exists()) {
    document.getElementById("profile-info").innerHTML = "User not found.";
    return;
  }

  const data = snap.data();

  document.getElementById("profile-info").innerHTML = `
    <h2>${data.username}</h2>
    <p>${data.email}</p>
    <p>Joined: ${new Date(data.createdAt).toLocaleDateString()}</p>
  `;
}

loadProfile();
