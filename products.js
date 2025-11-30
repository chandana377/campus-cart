// products.js
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function loadProducts() {
  const list = document.getElementById("products-list");
  list.innerHTML = "Loading...";

  const snapshot = await getDocs(collection(db, "products"));
  list.innerHTML = "";

  snapshot.forEach(doc => {
    const p = doc.data();

    list.innerHTML += `
      <div class="product-card">
        <img src="${p.imageURL}" alt="">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <strong>$${p.price}</strong>
      </div>
    `;
  });
}

loadProducts();
