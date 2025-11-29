// Firebase authentication example
import { signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert("Login Successful!");
        window.location.href = "profile.html";
    })
    .catch((error) => {
        alert("Error: " + error.message);
    });
});
