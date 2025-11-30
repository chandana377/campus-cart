// sell.js
import { db, storage } from "./firebase-config.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

document.getElementById("sell-form").addEventListener("submit", uploadProduct);

async function uploadProduct(e) {
  e.preventDefault();

  const title = document.getElementById("p-title").value;
  const price = document.getElementById("p-price").value;
  const description = document.getElementById("p-description").value;
  const file = document.getElementById("p-image").files[0];

  const user = localStorage.getItem("user");
  if (!user) {
    alert("You must log in first.");
    return;
  }

  // upload image
  const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  const imageURL = await getDownloadURL(storageRef);

  // save to Firestore
  await addDoc(collection(db, "products"), {
    title,
    price,
    description,
    imageURL,
    sellerId: user,
    createdAt: Date.now()
  });

  alert("Product uploaded!");
  location.href = "products.html";
}
