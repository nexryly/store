// EverMineSMP Store

console.log("EverMineSMP Store Loaded");

// Shopping Cart
let cart = [];

// Tambah ke keranjang
function addToCart(product, price) {
    cart.push({
        product: product,
        price: price
    });

    alert(product + " berhasil ditambahkan ke keranjang!");
}

// Beli melalui WhatsApp
function buyNow(product, price) {
    const nomor = "628975293251";

    const pesan =
`Halo Admin EverMineSMP!

Saya ingin membeli:

Produk : ${product}
Harga : Rp${price}

Username Minecraft :
`;

    window.open(
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
}
