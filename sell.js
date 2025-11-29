// sell.js
import { db, storage } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const form = document.getElementById("sellForm");
if(form){
  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const user = auth.currentUser;
    if(!user){ alert("You must be logged in to post items."); window.location.href = "login.html"; return; }

    const name = document.getElementById("pname").value.trim();
    const price = document.getElementById("price").value;
    const file = document.getElementById("imageFile").files[0];
    if(!name || !price || !file){ alert("Fill all fields."); return; }

    const path = `products/${user.uid}_${Date.now()}_${file.name}`;
    const refStorage = storageRef(storage, path);
    await uploadBytes(refStorage, file);
    const url = await getDownloadURL(refStorage);

    await addDoc(collection(db, "products"), {
      name, price: Number(price), image: url, ownerId: user.uid, storagePath: path, createdAt: serverTimestamp()
    });

    alert("Uploaded!");
    window.location.href = "products.html";
  });
}

// fetch user's products
export async function fetchMyProducts(uid){
  const q = query(collection(db, "products"), where("ownerId", "==", uid));
  const snaps = await getDocs(q);
  const arr = [];
  snaps.forEach(s=>arr.push({ id: s.id, ...s.data() }));
  return arr;
}

// delete product and storage
export async function deleteProduct(productId, storagePath){
  await deleteDoc(doc(db, "products", productId));
  if(storagePath){
    const obj = storageRef(storage, storagePath);
    await deleteObject(obj).catch(()=>{});
  }
}
