// products.js
import { db } from "./firebase.js";
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

export async function fetchAllProducts(){
  const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  const arr = [];
  snap.forEach(doc => arr.push({ id: doc.id, ...doc.data() }));
  return arr;
}

// If this file was loaded directly in a page, render list + search
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");

if(productList){
  (async ()=>{
    productList.innerHTML = `<p style="grid-column:1/-1;text-align:center;">Loading...</p>`;
    let all = await fetchAllProducts();
    render(all);
    if(searchInput){
      searchInput.addEventListener("input", (e)=>{
        const q = e.target.value.trim().toLowerCase();
        render(all.filter(p=>p.name.toLowerCase().includes(q)));
      });
    }
  })();
}

function render(list){
  if(!productList) return;
  if(list.length === 0){ productList.innerHTML = `<p style="grid-column:1/-1;text-align:center;">No listings yet.</p>`; return; }
  productList.innerHTML = "";
  for(const item of list){
    productList.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${escapeHtml(item.name)}</h3>
        <p>$${item.price}</p>
        <a class="btn" href="profile.html?view=${item.id}">Contact Seller</a>
      </div>
    `;
  }
}

function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }
