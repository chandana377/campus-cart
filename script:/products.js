// Fetch items from database
db.collection("products").get().then(snapshot => {
    snapshot.forEach(doc => {
        const item = doc.data();
        document.getElementById("productList").innerHTML += `
            <div class="card">
                <img src="${item.image}" />
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `;
    });
});
