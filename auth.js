// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Sign up
const signupBtn = document.getElementById("signupBtn");
if(signupBtn){
  signupBtn.addEventListener("click", async ()=>{
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPassword").value;
    try{
      await createUserWithEmailAndPassword(auth, email, pass);
      alert("Account created — redirecting to profile.");
      window.location.href = "profile.html";
    }catch(err){ alert(err.message); }
  });
}

// Sign in
const signinBtn = document.getElementById("signinBtn");
if(signinBtn){
  signinBtn.addEventListener("click", async ()=>{
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
    try{
      await signInWithEmailAndPassword(auth, email, pass);
      window.location.href = "profile.html";
    }catch(err){ alert(err.message); }
  });
}

// Expose onAuthState callback
export function onAuthState(callback){
  onAuthStateChanged(auth, callback);
}

export async function signOutUser(){
  await signOut(auth);
}
