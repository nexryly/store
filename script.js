let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>

            <span>
            Rp${item.price.toLocaleString("id-ID")}
            </span>

            <button onclick="removeItem(${index})">
            ❌
            </button>
        </div>
        `;
    });

    total.innerHTML =
    "Total : Rp" +
    totalPrice.toLocaleString("id-ID");
}

function checkout() {

    if(cart.length === 0){
        alert("Keranjang masih kosong.");
        return;
    }

    let pesan = "Halo Admin EverMineSMP!%0A%0ASaya ingin membeli:%0A";

    cart.forEach(item=>{
        pesan += "- " + item.name + " (Rp" + item.price + ")%0A";
    });

    let total = cart.reduce((a,b)=>a+b.price,0);

    pesan += "%0ATotal : Rp" + total;

    window.open(
    "https://wa.me/628975293251?text="+pesan,
    "_blank"
    );
}
